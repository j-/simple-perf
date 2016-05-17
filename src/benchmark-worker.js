import Benchmark from 'benchmark';
import register from 'promise-worker/register';

console.log(Benchmark.platform);

const suite = new Benchmark.Suite();

suite.on('cycle', ({ target }) => {
	console.log(String(target));
});

register((message) => {
	if (message.type !== 'test') {
		return;
	}

	suite.reset();

	message.tests.forEach(({ name, source }, i) => {
		const fn = source;
		suite.add(name, fn, {
			onStart: ({ target }) => {
				if (i === 1) {
					target.abort();
				}
			},
		});
	});

	console.info('Running');

	suite.run({
		async: false,
	});

	console.info('Complete');
	console.log('Fastest is ' + suite.filter('fastest').map('name'));
});
