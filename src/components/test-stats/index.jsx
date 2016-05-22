import React, { Component } from 'react';
import format from 'number-formatter';

export default class Stats extends Component {
	render () {
		let {
			hz,
			rme,
			samples,
			elapsed,
		} = this.props;
		hz = format('#,##0.00', hz);
		rme = format('0.00%', rme);
		samples = format('0', samples);
		elapsed = format('0.##', elapsed / 1000);
		return <div className="test-stats">
			{ `${hz} ops/s (\xb1${rme}). ${samples} sample(s). Run for ${elapsed}s.` }
		</div>
	}
}
