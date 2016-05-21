import uuid from 'node-uuid';
import { connect } from 'react-redux';
import Suite from './';
import {
	createNewItem,
} from '../../store/subject-list/actions';

const mapStateToProps = (state) => {
	return {
		list: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: () => {
			const action = createNewItem();
			dispatch(action);
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Suite);
