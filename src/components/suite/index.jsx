import React from 'react';
import SubjectContainer from '../subject/container';
import SubjectList from '../subject-list';

export default class Suite extends React.Component {
	render () {
		const {
			list,
			addItem,
			startTest,
		} = this.props;
		return <div>
			<SubjectList list={ list } Item={ SubjectContainer } />
			<button onClick={ addItem }>
				Add new item
			</button>
			<button onClick={ startTest }>
				Run suite
			</button>
		</div>;
	}
}
