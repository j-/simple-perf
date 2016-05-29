import React, { Component } from 'react';

export default class FastestIndicator extends Component {
	static defaultProps = {
		displayText: 'Fastest',
	}

	render () {
		const { displayText } = this.props;
		// Very simple for now
		return <div className="fastest">{ displayText }</div>;
	}
}
