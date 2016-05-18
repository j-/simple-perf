import uuid from 'node-uuid';
import { connect } from 'react-redux';
import Suite from './';
import {
	appendItem,
} from '../../store/subject-list/actions';

const mapStateToProps = (state) => {
	return {
		list: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: () => {
			const item = {
				id: uuid(),
				source: null,
			};
			const action = appendItem(item);
			dispatch(action);
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Suite);
