import Benchmark from 'benchmark';
import {
	START_PERF_TEST,
} from '../store/subject-list/types';

console.log(Benchmark.platform);

function startPerfTest (state) {
	const tests = state;
	const suite = new Benchmark.Suite();

	suite.on('cycle', ({ target }) => {
		console.log(String(target));
	});

	suite.reset();

	tests.forEach((test) => {
		suite.add({
			name: test.id,
			fn: test.source,
		});
	});

	console.info('Running');

	suite.run({
		async: false,
	});

	console.info('Complete');
	console.log('Fastest is ' + suite.filter('fastest').map('name'));
}

global.addEventListener('message', function (message) {
	const action = message.data;
	switch (action.type) {
		case START_PERF_TEST:
			startPerfTest(action.state);
			break;
	}
});
