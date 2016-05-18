import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import Suite from './components/suite';
import store from './store';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={ store }>
			<Suite />
		</Provider>,
		document.getElementById('app')
	);
});
