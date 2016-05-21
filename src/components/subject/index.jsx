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
			moveUp,
			moveDown,
			remove,
			updateSource,
			skip,
			cancel,
		} = this.props;
		const fastestIndicator = isFastest ? <FastestIndicator /> : null;
		const skipButton = canSkip ? <button onClick={ skip }>Skip test</button> : null;
		const cancelButton = canCancel ? <button onClick={ cancel }>Cancel test</button> : null;
		return <div>
			<CodeMirror
				value={ source }
				onChange={ updateSource }
				options={ editorOptions }
			/>
			<div className="subject-actions">
				<button onClick={ moveUp }>Move up</button>
				<button onClick={ moveDown }>Move down</button>
				<button onClick={ remove }>Delete</button>
				{ skipButton }
				{ cancelButton }
			</div>
			<SubjectStatus status={ status } />
			{ fastestIndicator }
		</div>;
	}
}
