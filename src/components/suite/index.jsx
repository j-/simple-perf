import React from 'react';
import SubjectContainer from '../subject/container';
import SubjectList from '../subject-list';

export default class Suite extends React.Component {
	runSuite () {

	}

	render () {
		const {
			props,
			runSuite,
		} = this;
		const {
			list,
			addItem,
		} = props;
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
