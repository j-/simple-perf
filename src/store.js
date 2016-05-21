import { createStore, applyMiddleware } from 'redux';
import uuid from 'node-uuid';
import reducer from './state/subject-list/reducer';
import subjectReducer from './state/subject/reducer';
import {
	START_PERF_TEST,
} from './state/subject-list/types';

const LOCAL_STORAGE_KEY = 'simple-perf-store';

/**
 * Creates a default state for the store. By default, a suite has two test
 *   cases. Each test case has a random ID and no source.
 * @return {Subject[]} List of test subjects
 */
function makeDefaultState () {
	return [
		subjectReducer(undefined, {}),
		subjectReducer(undefined, {}),
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

let worker;
try {
	worker = new Worker('benchmark-worker.js');
} catch (err) {
	console.warn('Could not load benchmark worker');
	if (err.name === 'SecurityError') {
		if (location.protocol === 'file:') {
			console.warn('Workers cannot be accessed on the `file:` protocol');
			console.warn('Please load this app over HTTP(S)');
		}
	}
	throw err;
}
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