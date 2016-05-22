import Benchmark from 'benchmark';
import {
	START_PERF_TEST,
} from '../state/subject-list/types';
import {
	setStatus,
	markFastest,
	updateStats,
} from '../state/subject/actions';
import {
	STATUS_CANCELLED,
	STATUS_SKIPPED,
	STATUS_SUCCESS,
	STATUS_ERROR,
	STATUS_RUNNING,
} from '../state/subject/statuses';
import {
	SET_STATUS,
} from '../state/subject/types';

let currentState = null;
let currentSuite = null;

function dispatch (message) {
	global.postMessage(message);
}

function getBenchmark (id) {
	const suite = currentSuite;
	for (let i = 0; i < suite.length; i++) {
		let bench = suite[i];
		if (bench.name === id) {
			return bench;
		}
	}
	return null;
}

function sendStatsUpdate (id, bench) {
	const stats = {
		hz: bench.hz,
		rme: bench.stats.rme,
		samples: bench.stats.sample.length,
		elapsed: (bench.times.elapsed * 1000) || (Date.now() - bench.times.timeStamp),
	};
	const action = updateStats(id, stats);
	dispatch(action);
}

function startPerfTest () {
	currentSuite = new Benchmark.Suite();
	const tests = currentState;
	const suite = currentSuite;

	tests.forEach((item) => {
		let didError = false;
		let didSkip = false;
		suite.add({
			name: item.id,
			fn: item.source,
			onAbort: ({ target }) => {
				if (didError || didSkip || target.aborted) {
					return;
				}
				const action = setStatus(item.id, STATUS_CANCELLED);
				dispatch(action);
			},
			onComplete: ({ target }) => {
				if (didError || didSkip || target.aborted) {
					return;
				}
				sendStatsUpdate(item.id, target);
				const action = setStatus(item.id, STATUS_SUCCESS);
				dispatch(action);
			},
			onError: () => {
				didError = true;
				const action = setStatus(item.id, STATUS_ERROR);
				dispatch(action);
			},
			onStart: ({ target }) => {
				if (item.status === STATUS_SKIPPED) {
					didSkip = true;
					target.abort();
					return;
				}
				const action = setStatus(item.id, STATUS_RUNNING);
				dispatch(action);
			},
			onCycle: ({ target }) => {
				sendStatsUpdate(item.id, target);
			},
		});
	});

	suite.run({
		async: true,
	});

	suite.on('complete', function () {
		suite.filter('fastest').forEach((bench) => {
			const id = bench.name;
			const action = markFastest(id);
			dispatch(action);
		});
	});
}

function handleAbortTest (id) {
	const bench = getBenchmark(id);
	bench.abort();
}

function handleSkipTest (/* id */) {
	// Do nothing
}

function handleStatusChange (id, status) {
	const item = currentState.find((item) => item.id === id);
	item.status = status;
	if (status === STATUS_CANCELLED) {
		handleAbortTest(id);
	} else if (status === STATUS_SKIPPED) {
		handleSkipTest(id);
	}
}

global.addEventListener('message', function (message) {
	const action = message.data;
	switch (action.type) {
		case START_PERF_TEST:
			currentState = action.state;
			startPerfTest();
			break;
		case SET_STATUS:
			handleStatusChange(action.id, action.status);
			break;
	}
});
