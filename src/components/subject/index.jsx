import React from 'react';
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
		const skipButton = canSkip ? <button onClick={ onSkip }>Skip test</button> : null;
		const cancelButton = canCancel ? <button onClick={ onCancel }>Cancel test</button> : null;
		return <div>
			<CodeMirror
				value={ source }
				onChange={ onUpdateSource }
				options={ editorOptions }
			/>
			<div className="subject-actions">
				<button onClick={ onMoveUp }>Move up</button>
				<button onClick={ onMoveDown }>Move down</button>
				<button onClick={ onRemove }>Delete</button>
				{ skipButton }
				{ cancelButton }
			</div>
			<SubjectStatus status={ status } />
			{ fastestIndicator }
		</div>;
	}
}
