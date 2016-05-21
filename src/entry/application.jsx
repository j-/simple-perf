import React from 'react';
import ReactDOM from 'react-dom';

import '../styles';
import 'codemirror/mode/javascript/javascript';

import { Provider } from 'react-redux';
import Application from '../components/application';
import store from '../store';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={ store }>
			<Application />
		</Provider>,
		document.getElementById('app')
	);
});
