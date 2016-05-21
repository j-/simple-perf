import { createStore, applyMiddleware } from 'redux';
import uuid from 'node-uuid';
import reducer from './subject-list/reducer';
import {
	START_PERF_TEST,
} from './subject-list/types';

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
}
if (!localStorageState || !localStorageState.length) {
	// Create new state tree
	preloadState = makeDefaultState();
	// Persist this new state tree
	saveLocalStorageState(preloadState);
}

const worker = new Worker('benchmark-worker.js');
const runner = (store) => (next) => (action) => {
	if (action.type === START_PERF_TEST) {
		const result = next(action);
		worker.postMessage({
			type: START_PERF_TEST,
			state: store.getState(),
		});
		return result;
	}
	return next(action);
};

worker.addEventListener('message', function (message) {
	const action = message.data;
	store.dispatch(action);
});

const middleware = applyMiddleware(runner);
const store = createStore(reducer, preloadState, middleware);

store.subscribe(() => {
	const state = store.getState();
	saveLocalStorageState(state);
});

export default store;
