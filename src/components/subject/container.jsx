import { connect } from 'react-redux';
import Subject from './';
import * as actions from '../../store/subject-list/actions';

const mapStateToProps = (state) => {
	return {
		id: state.id,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		moveUp: (item) => {
			const action = actions.moveItemUp(item);
			dispatch(action);
		},
		moveDown: (item) => {
			const action = actions.moveItemDown(item);
			dispatch(action);
		},
		remove: (item) => {
			const action = actions.removeItem(item);
			dispatch(action);
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Subject);
