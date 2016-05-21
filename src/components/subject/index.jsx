import React from 'react';
import {
	ButtonToolbar,
	ButtonGroup,
	Button,
	Panel,
} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import editorOptions from './editor-options';
import SubjectStatus from '../subject-status';
import FastestIndicator from '../fastest-indicator';

export default class Subject extends React.Component {
	render () {
		const {
			id,
			source,
			status,
			isFastest,
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
		return <div className="subject">
			<CodeMirror
				value={ source }
				onChange={ onUpdateSource }
				options={ editorOptions }
			/>
			<br />
			<ButtonToolbar>
				<ButtonGroup>
					<Button onClick={ onMoveUp } disabled={ !canMoveUp }>Move up</Button>
					<Button onClick={ onMoveDown } disabled={ !canMoveDown }>Move down</Button>
					<Button onClick={ onRemove }>Delete</Button>
				</ButtonGroup>
				<ButtonGroup>
					{ skipButton }
					{ cancelButton }
				</ButtonGroup>
			</ButtonToolbar>
			<br />
			<Panel>
				{ fastestIndicator }
				<SubjectStatus status={ status } />
			</Panel>
		</div>;
	}
}
