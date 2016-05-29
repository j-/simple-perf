import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import PageIndex from '../page-index';

export default class Application extends Component {
	render () {
		return <div className="container">
			<PageHeader>Simple Perf</PageHeader>
			<PageIndex />
		</div>;
	}
}
