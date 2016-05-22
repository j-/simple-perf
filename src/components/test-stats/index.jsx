import React, { Component } from 'react';
import format from 'number-formatter';

export default class Stats extends Component {
	render () {
		const {
			hz,
		} = this.props;
		return <div class="test-stats">
			{ format('#,##0.00', hz) } ops/s
		</div>
	}
}
