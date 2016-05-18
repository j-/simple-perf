import React from 'react';
import SubjectContainer from '../subject/container';
import SubjectList from '../subject-list';

import store from '../../store';

import PromiseWorker from 'promise-worker';
const worker = new Worker('benchmark-worker.js');
const promiseWorker = new PromiseWorker(worker);

export default class Suite extends React.Component {
	runSuite () {
		const tests = store.getState();
		promiseWorker.postMessage({
			type: 'test',
			tests,
		});
	}

	render () {
		const {
			list,
			addItem,
		} = this.props;
		const runSuite = () => this.runSuite();
		return <div>
			<SubjectList list={ list } Item={ SubjectContainer } />
			<button onClick={ addItem }>
				Add new item
			</button>
			<button onClick={ runSuite }>
				Run suite
			</button>
		</div>;
	}
}
