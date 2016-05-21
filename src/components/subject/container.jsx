import { connect } from 'react-redux';
import Subject from './';
import {
	moveItemUp,
	moveItemDown,
	removeItem,
} from '../../state/subject-list/actions';
import {
	updateSource,
	setStatus,
} from '../../state/subject/actions';
import {
	STATUS_PENDING,
	STATUS_RUNNING,
	STATUS_CANCELLED,
	STATUS_SKIPPED,
} from '../../state/subject/statuses';

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
		canCancel: status === STATUS_RUNNING,
		canSkip: status === STATUS_PENDING,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const id = ownProps.id;
	return {
		moveUp: () => {
			const action = moveItemUp({ id });
			dispatch(action);
		},
		moveDown: () => {
			const action = moveItemDown({ id });
			dispatch(action);
		},
		remove: () => {
			const action = removeItem({ id });
			dispatch(action);
		},
		updateSource: (source) => {
			const action = updateSource(id, source);
			dispatch(action);
		},
		cancel: () => {
			const action = setStatus(id, STATUS_CANCELLED);
			dispatch(action);
		},
		skip: () => {
			const action = setStatus(id, STATUS_SKIPPED);
			dispatch(action);
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Subject);
