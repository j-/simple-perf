import { connect } from 'react-redux';
import Subject from './';
import {
	moveItemUp,
	moveItemDown,
	removeItem,
} from '../../store/subject-list/actions';
import {
	updateSource,
} from '../../store/subject/actions';

const mapStateToProps = (state) => {
	return {
		id: state.id,
		source: state.source,
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
