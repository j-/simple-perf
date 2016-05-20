import { createStore } from 'redux';
import uuid from 'node-uuid';
import reducer from './subject-list/reducer';

const LOCAL_STORAGE_KEY = 'simple-perf-store';

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

/**
 * Fetches previously saved local storage state.
 * @return {?Subject[]} List of test subjects. Can be null if never saved.
 */
function loadLocalStorageState () {
	const stringified = localStorage.getItem(LOCAL_STORAGE_KEY);
	const parsed = JSON.parse(stringified);
	return parsed;
}

/**
 * Saves a given state to local storage.
 * @param {Subject[]} state Current state to save to local storage
 */
function saveLocalStorageState (state) {
	const stringified = JSON.stringify(state);
	localStorage.setItem(LOCAL_STORAGE_KEY, stringified);
}

const localStorageState = loadLocalStorageState();
let preloadState;

if (localStorageState) {
	// Local storage state exists
	preloadState = localStorageState;
} else {
	// Create new state tree
	preloadState = makeDefaultState();
	// Persist this new state tree
	saveLocalStorageState(preloadState);
}

const store = createStore(reducer, preloadState);

store.subscribe(() => {
	const state = store.getState();
	saveLocalStorageState(state);
});

export default store;
