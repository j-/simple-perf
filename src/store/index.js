import { createStore } from 'redux';
import uuid from 'node-uuid';
import reducer from './subject-list/reducer';

/**
 * Creates a default state for the store. By default, a suite has two test
 *   cases. Each test case has a random ID and no source.
 * @return {Subject[]} List of test subjects
 */
function makeDefaultState () {
	return [
		{ id: uuid(), source: null },
		{ id: uuid(), source: null },
	];
}

const LOCAL_STORAGE_KEY = 'simple-perf-store';
const stringified = localStorage.getItem(LOCAL_STORAGE_KEY);
const LOCAL_STORAGE_STATE = JSON.parse(stringified) || makeDefaultState();

const store = createStore(reducer, LOCAL_STORAGE_STATE);

store.subscribe(() => {
	const state = store.getState();
	const stringified = JSON.stringify(state);
	localStorage.setItem(LOCAL_STORAGE_KEY, stringified);
});

export default store;
