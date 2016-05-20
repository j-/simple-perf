import Benchmark from 'benchmark';
import register from 'promise-worker/register';

console.log(Benchmark.platform);

register((message) => {
	if (message.type !== 'test') {
		return;
	}

	const suite = new Benchmark.Suite();

	suite.on('cycle', ({ target }) => {
		console.log(String(target));
	});

	suite.reset();

	message.tests.forEach((test) => {
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
});
