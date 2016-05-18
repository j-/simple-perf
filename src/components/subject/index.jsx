import React from 'react';
import CodeMirror from 'react-codemirror';

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
		} = item;
		const editorOptions = {
			mode: 'javascript',
		};
		return <div>
			<span>ID: { id }</span>
			<CodeMirror
				value={ source }
				onChange={ (source) => updateSource(id, source) }
				options={ editorOptions }
			/>
			<div class="subject-actions">
				<button onClick={ () => moveUp(item) }>Move up</button>
				<button onClick={ () => moveDown(item) }>Move down</button>
				<button onClick={ () => remove(item) }>Delete</button>
			</div>
		</div>;
	}
}
