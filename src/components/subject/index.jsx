import React from 'react';
import CodeMirror from 'react-codemirror';
import editorOptions from './editor-options';
import SubjectStatus from '../subject-status';
import FastestIndicator from '../fastest-indicator';

export default class Subject extends React.Component {
	render () {
		const {
			item,
			moveUp,
			moveDown,
			remove,
			updateSource,
		} = this.props;
		const {
			id,
			source,
			status,
			isFastest,
		} = item;
		const fastestIndicator = isFastest ? <FastestIndicator /> : null;
		return <div>
			<CodeMirror
				value={ source }
				onChange={ (source) => updateSource(id, source) }
				options={ editorOptions }
			/>
			<div className="subject-actions">
				<button onClick={ () => moveUp(item) }>Move up</button>
				<button onClick={ () => moveDown(item) }>Move down</button>
				<button onClick={ () => remove(item) }>Delete</button>
			</div>
			<SubjectStatus status={ status } />
			{ fastestIndicator }
		</div>;
	}
}
