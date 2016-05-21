import Benchmark from 'benchmark';
import {
	START_PERF_TEST,
} from '../store/subject-list/types';
import {
	setStatus,
	markFastest,
} from '../store/subject/actions';
import {
	STATUS_CANCELLED,
	STATUS_SUCCESS,
	STATUS_ERROR,
	STATUS_RUNNING,
} from '../store/subject/statuses';

console.log(Benchmark.platform);

function dispatch (message) {
	global.postMessage(message);
}

function startPerfTest (state) {
	const tests = state;
	const suite = new Benchmark.Suite();

	tests.forEach(({ id, source, status }) => {
		let didError = false;
		suite.add({
			name: id,
			fn: source,
			onAbort: () => {
				if (didError) {
					return;
				}
				const action = setStatus(id, STATUS_CANCELLED);
				dispatch(action);
			},
			onComplete: () => {
				if (didError) {
					return;
				}
				const action = setStatus(id, STATUS_SUCCESS);
				dispatch(action);
			},
			onError: () => {
				didError = true;
				const action = setStatus(id, STATUS_ERROR);
				dispatch(action);
			},
			onStart: () => {
				const action = setStatus(id, STATUS_RUNNING);
				dispatch(action);
			},
		});
	});

	suite.run({
		async: false,
	});

	console.info('Complete');
	suite.filter('fastest').forEach((benchmark) => {
		const id = benchmark.name;
		const action = markFastest(id);
		dispatch(action);
	});
}

global.addEventListener('message', function (message) {
	const action = message.data;
	switch (action.type) {
		case START_PERF_TEST:
			startPerfTest(action.state);
			break;
	}
});
