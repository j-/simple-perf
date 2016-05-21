import { connect } from 'react-redux';
import Subject from './';
import {
	moveItemUp,
	moveItemDown,
	removeItem,
} from '../../state/subject-list/actions';
import {
	updateSource,
} from '../../state/subject/actions';

const mapStateToProps = (state = [], ownProps) => {
	const id = ownProps.id;
	const item = state.find((item) => {
		return item.id === id;
	});
	const { source, status, isFastest } = item;
	return {
		id,
		source,
		status,
		isFastest,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		moveUp: (item) => {
			const action = moveItemUp(item);
			dispatch(action);
		},
		moveDown: (item) => {
			const action = moveItemDown(item);
			dispatch(action);
		},
		remove: (item) => {
			const action = removeItem(item);
			dispatch(action);
		},
		updateSource: (id, source) => {
			const action = updateSource(id, source);
			dispatch(action);
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Subject);
