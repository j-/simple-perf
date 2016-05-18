import React from 'react';

export default class SubjectItem extends React.Component {
	render () {
		const { item } = this.props;
		const { id } = item;
		return <div>{ id }</div>;
	}
}
