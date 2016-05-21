import test from 'ava';
import reducer from '../src/state/subject/reducer';
import {
	setStatus,
	updateSource,
	markFastest,
} from '../src/state/subject/actions';

test('Can set status if ID matches', (t) => {
	const subject = {
		id: 'foobar',
		status: 'old',
	};
	const expected = {
		id: 'foobar',
		status: 'new',
	};
	const action = setStatus('foobar', 'new');
	const actual = reducer(subject, action);
	t.deepEqual(actual, expected);
});

test('Does not set status if ID does not match', (t) => {
	const subject = {
		id: 'foobar',
		status: 'same',
	};
	const expected = {
		id: 'foobar',
		status: 'same',
	};
	const action = setStatus('qux', 'new');
	const actual = reducer(subject, action);
	t.deepEqual(actual, expected);
});

test('Can set source if ID matches', (t) => {
	const subject = {
		id: 'foobar',
		source: 'old',
	};
	const expected = {
		id: 'foobar',
		source: 'new',
		// Status is changed when source updated
		status: 'STATUS_DEFAULT',
	};
	const action = updateSource('foobar', 'new');
	const actual = reducer(subject, action);
	t.deepEqual(actual, expected);
});

test('Does not set source if ID does not match', (t) => {
	const subject = {
		id: 'foobar',
		source: 'same',
	};
	const expected = {
		id: 'foobar',
		source: 'same',
	};
	const action = updateSource('qux', 'new');
	const actual = reducer(subject, action);
	t.deepEqual(actual, expected);
});

test('Can set fastest subject', (t) => {
	const subject = {
		id: 'foobar',
		isFastest: false,
	};
	const expected = {
		id: 'foobar',
		isFastest: true,
	};
	const action = markFastest('foobar');
	const actual = reducer(subject, action);
	t.deepEqual(actual, expected);
});
