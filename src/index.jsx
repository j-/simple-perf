import React from 'react';
import ReactDOM from 'react-dom';

import uuid from 'node-uuid';

import PromiseWorker from 'promise-worker';
const worker = new Worker('benchmark-worker.js');
const promiseWorker = new PromiseWorker(worker);

import Codemirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';

const message = {
	type: 'test',
	tests: [
		{
			name: 'RegExp#test',
			source: '/o/.test(\'Hello World!\')',
		},
		{
			name: 'String#indexOf',
			source: '\'Hello World!\'.indexOf(\'o\') > -1',
		},
		{
			name: 'String#match',
			source: '!!\'Hello World!\'.match(/o/)',
		},
	],
};

promiseWorker.postMessage(message)
	.then((response) => {
		console.log('response', response);
	})
	.catch((err) => {
		console.error(err);
	});

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Codemirror options={{
			mode: 'javascript'
		}} />,
		document.getElementById('app')
	);
});

window.run = () => {
	promiseWorker.postMessage(message);
};
