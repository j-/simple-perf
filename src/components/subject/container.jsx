import { connect } from 'react-redux';
import Subject from './';
import * as listActions from '../../store/subject-list/actions';
import * as itemActions from '../../store/subject/actions';

const mapStateToProps = (state) => {
	return {
		id: state.id,
		source: state.source,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		moveUp: (item) => {
			const action = listActions.moveItemUp(item);
			dispatch(action);
		},
		moveDown: (item) => {
			const action = listActions.moveItemDown(item);
			dispatch(action);
		},
		remove: (item) => {
			const action = listActions.removeItem(item);
			dispatch(action);
		},
		updateSource: (source) => {
			const action = itemActions.updateSource(source);
			dispatch(action);
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Subject);
