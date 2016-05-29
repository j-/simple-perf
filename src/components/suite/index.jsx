import React, { Component } from 'react';
import { Panel, ButtonToolbar, Button } from 'react-bootstrap';
import SubjectContainer from '../subject/container';
import SubjectList from '../subject-list';

export default class Suite extends Component {
	render () {
		const {
			list,
			addItem,
			startTest,
		} = this.props;
		return <div className="suite">
			<SubjectList list={ list } Item={ SubjectContainer } />
			<br />
			<Panel>
				<ButtonToolbar>
					<Button onClick={ addItem }>
						Add new item
					</Button>
					<Button onClick={ startTest }>
						Run suite
					</Button>
				</ButtonToolbar>
			</Panel>
		</div>;
	}
}
