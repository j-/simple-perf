import React from 'react';
import SubjectListItem from '../subject-list-item';

export default class SubjectList extends React.Component {
	buildItems (list) {
		return list.map((item) => {
			return <SubjectListItem item={ item } key={ item.id } />
		});
	}

	render () {
		const { list } = this.props;
		const items = this.buildItems(list);
		return <div>{ items }</div>;
	}
}
