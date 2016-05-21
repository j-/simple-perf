import React from 'react';
import SubjectListItem from '../subject-list-item';

export default class SubjectList extends React.Component {
	render () {
		const { list, Item } = this.props;
		const items = list.map((item) => {
			return <SubjectListItem item={ item } key={ item.id }>
				<Item id={ item.id } />
			</SubjectListItem>;
		});
		return <div className="subject-list">{ items }</div>;
	}
}
