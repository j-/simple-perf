import React from 'react';

export default class Subject extends React.Component {
	render () {
		const {
			item,
			moveUp,
			moveDown,
			remove,
		} = this.props;
		const { id } = item;
		return <div>
			<span>ID: { id }</span>
			<div class="subject-actions">
				<button onClick={ () => moveUp(item) }>Move up</button>
				<button onClick={ () => moveDown(item) }>Move down</button>
				<button onClick={ () => remove(item) }>Delete</button>
			</div>
		</div>;
	}
}
