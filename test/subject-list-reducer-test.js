import test from 'ava';
import reducer from '../src/store/subject-list/reducer';
import {
	prependItem,
	appendItem,
	createNewItem,
	removeItem,
	moveItemUp,
	moveItemDown,
} from '../src/store/subject-list/actions';

test('Returns an empty list as default state', (t) => {
	const result = reducer();
	t.truthy(Array.isArray(result), 'Result is array');
	t.is(result.length, 0, 'Array is empty');
});

test('Can prepend items to a list', (t) => {
	const list = [
		{ id: 'b' },
	];
	const actual = reducer(list, prependItem({ id: 'a' }));
	const expected = [
		{ id: 'a' },
		{ id: 'b' },
	];
	t.is(actual.length, 2, 'Length is correct');
	t.deepEqual(actual, expected, 'Output matches expected');
});

test('Can append items to a list', (t) => {
	const list = [
		{ id: 'a' },
	];
	const actual = reducer(list, appendItem({ id: 'b' }));
	const expected = [
		{ id: 'a' },
		{ id: 'b' },
	];
	t.is(actual.length, 2, 'Length is correct');
	t.deepEqual(actual, expected, 'Output matches expected');
});

test('Can create new items in list', (t) => {
	const list = [
		{ id: 'a' },
	];
	const result = reducer(list, createNewItem());
	t.is(result.length, 2, 'Length is correct');
	t.is(result[0].id, 'a', 'First item did not move');
	t.is(typeof result[1].id, 'string', 'New item has an ID');
	t.truthy(result[1].hasOwnProperty('source'), 'New item has source');
	t.truthy(result[1].hasOwnProperty('status'), 'New item has a status');
});

test('Can remove items from a list', (t) => {
	const list = [
		{ id: 'a' },
		{ id: 'b' },
	];
	const actual = reducer(list, removeItem({ id: 'b' }));
	const expected = [
		{ id: 'a' },
	];
	t.is(actual.length, 1, 'Length is correct');
	t.deepEqual(actual, expected, 'Output matches expected');
});

test('Can move items up a list', (t) => {
	const list = [
		{ id: 'b' },
		{ id: 'a' },
	];
	const actual = reducer(list, moveItemUp({ id: 'a' })).map((item) => item.id);
	const expected = [
		'a',
		'b',
	];
	t.deepEqual(actual, expected, 'Output matches expected');
});

test('Cannot move item up if it is at the top of the list', (t) => {
	const list = [
		{ id: 'a' },
		{ id: 'b' },
	];
	const actual = reducer(list, moveItemUp({ id: 'a' })).map((item) => item.id);
	const expected = [
		'a',
		'b',
	];
	t.deepEqual(actual, expected, 'Output matches expected');
});

test('Cannot move an item up if it is not in the list', (t) => {
	const list = [
		{ id: 'a' },
		{ id: 'b' },
	];
	const actual = reducer(list, moveItemUp({ id: 'c' })).map((item) => item.id);
	const expected = [
		'a',
		'b',
	];
	t.deepEqual(actual, expected, 'Output matches expected');
});

test('Can move items down a list', (t) => {
	const list = [
		{ id: 'b' },
		{ id: 'a' },
	];
	const actual = reducer(list, moveItemDown({ id: 'b' })).map((item) => item.id);
	const expected = [
		'a',
		'b',
	];
	t.deepEqual(actual, expected, 'Output matches expected');
});

test('Cannot move item down if it is at the top of the list', (t) => {
	const list = [
		{ id: 'a' },
		{ id: 'b' },
	];
	const actual = reducer(list, moveItemDown({ id: 'b' })).map((item) => item.id);
	const expected = [
		'a',
		'b',
	];
	t.deepEqual(actual, expected, 'Output matches expected');
});

test('Cannot move an item down if it is not in the list', (t) => {
	const list = [
		{ id: 'a' },
		{ id: 'b' },
	];
	const actual = reducer(list, moveItemDown({ id: 'c' })).map((item) => item.id);
	const expected = [
		'a',
		'b',
	];
	t.deepEqual(actual, expected, 'Output matches expected');
});
