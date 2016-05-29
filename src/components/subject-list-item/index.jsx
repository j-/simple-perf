import React, { Component } from 'react';

export default class SubjectListItem extends Component {
	render () {
		const { item, children } = this.props;
		const { id } = item;
		return <div className="subject-list-item">{ children }</div>;
	}
}
