import { createStore } from 'redux';
import reducer from './subject-list/reducer';

const LOCAL_STORAGE_KEY = 'simple-perf-store';
const stringified = localStorage.getItem(LOCAL_STORAGE_KEY);
const DEFAULT_VALUE = JSON.parse(stringified) || [];

const store = createStore(reducer, DEFAULT_VALUE);

store.subscribe(() => {
	const state = store.getState();
	const stringified = JSON.stringify(state);
	localStorage.setItem(LOCAL_STORAGE_KEY, stringified);
});

export default store;
