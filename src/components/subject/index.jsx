import React from 'react';
import {
	ButtonToolbar,
	ButtonGroup,
	Button,
	Panel,
	Glyphicon,
} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import editorOptions from './editor-options';
import SubjectStatus from '../subject-status';
import FastestIndicator from '../fastest-indicator';
import TestStats from '../test-stats';

export default class Subject extends React.Component {
	render () {
		const {
			id,
			source,
			status,
			isFastest,
			stats,
			index,
			canMoveUp,
			canMoveDown,
			canSkip,
			canCancel,
			onMoveUp,
			onMoveDown,
			onRemove,
			onUpdateSource,
			onSkip,
			onCancel,
		} = this.props;
		const fastestIndicator = isFastest ? <FastestIndicator /> : null;
		const skipButton = canSkip ? <Button onClick={ onSkip }>Skip test</Button> : null;
		const cancelButton = canCancel ? <Button onClick={ onCancel }>Cancel test</Button> : null;
		const testStats = stats !== null ? <TestStats { ...stats } /> : null;
		return <div className="subject">
			<div className="clearfix">
				<big className="subject-index">
					Test { index + 1 }
				</big>
				<div className="pull-right">
					<ButtonGroup>
						<Button bsStyle="link" onClick={ onMoveUp } disabled={ !canMoveUp }>
							<Glyphicon glyph="chevron-up" />
						</Button>
						<Button bsStyle="link" onClick={ onMoveDown } disabled={ !canMoveDown }>
							<Glyphicon glyph="chevron-down" />
						</Button>
						<Button bsStyle="link" onClick={ onRemove }>
							<Glyphicon glyph="remove" />
						</Button>
					</ButtonGroup>
				</div>
			</div>
			<CodeMirror
				value={ source }
				onChange={ onUpdateSource }
				options={ editorOptions }
			/>
			<br />
			<Panel>
				<ButtonToolbar className="pull-right">
					<ButtonGroup>
						{ skipButton }
						{ cancelButton }
					</ButtonGroup>
				</ButtonToolbar>
				{ fastestIndicator }
				<SubjectStatus status={ status } />
				{ testStats }
			</Panel>
		</div>;
	}
}
