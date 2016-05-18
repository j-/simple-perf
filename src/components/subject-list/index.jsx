import React from 'react';
import SubjectListItem from '../subject-list-item';

export default class SubjectList extends React.Component {
	render () {
		const { list } = this.props;
		const items = list.map((item) => {
			return <SubjectListItem item={ item } key={ item.id } />
		});
		return <div>{ items }</div>;
	}
}
