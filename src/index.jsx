import React from 'react';
import ReactDOM from 'react-dom';

import './styles';
import 'codemirror/mode/javascript/javascript';

import { Provider } from 'react-redux';
import SuiteContainer from './components/suite/container';
import store from './store';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={ store }>
			<SuiteContainer />
		</Provider>,
		document.getElementById('app')
	);
});
