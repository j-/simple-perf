import React from 'react';
import SubjectList from '../subject-list';

export default class Suite extends React.Component {
	render () {
		const {
			list,
			addItem,
		} = this.props;
		return <div>
			<SubjectList list={ list } />
			<button onClick={ addItem }>
				Add new item
			</button>
		</div>;
	}
}
