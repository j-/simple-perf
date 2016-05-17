import test from 'ava';
import reducer from '../src/store/subject/reducer';
import * as actions from '../src/store/subject/actions';

test('Can set status if ID matches', (t) => {
	const subject = {
		id: 'foobar',
		status: 'old',
	};
	const expected = {
		id: 'foobar',
		status: 'new',
	};
	const action = actions.setStatus('foobar', 'new');
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
	const action = actions.setStatus('qux', 'new');
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
	};
	const action = actions.updateSource('foobar', 'new');
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
	const action = actions.updateSource('qux', 'new');
	const actual = reducer(subject, action);
	t.deepEqual(actual, expected);
});
