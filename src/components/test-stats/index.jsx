import React, { Component } from 'react';
import format from 'number-formatter';

export default class Stats extends Component {
	render () {
		const {
			hz,
			rme,
			samples,
		} = this.props;
		return <div class="test-stats">
			<span class="stat">{ format('#,##0.00', hz) } ops/s</span>
			{ ' ' }
			(<span class="stat">&plusmn;{ format('0.00%', rme) }</span>).
			{ ' ' }
			<span class="stat">{ samples || 0 } sample(s)</span>.
		</div>
	}
}
