import React, { Component } from 'react';

export default class Stats extends Component {
	render () {
		const {
			hz,
		} = this.props;
		return <div class="test-stats">
			{ hz } ops/s
		</div>
	}
}
