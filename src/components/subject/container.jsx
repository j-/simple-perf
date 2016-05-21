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
	const index = state.findIndex((item) => item.id === id);
	const item = state[index];
	const { source, status, isFastest } = item;
	return {
		id,
		index,
		source,
		status,
		isFastest,
		canMoveUp: index > 0,
		canMoveDown: index < state.length - 1,
		canCancel: status === STATUS_RUNNING,
		canSkip: status === STATUS_PENDING,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const id = ownProps.id;
	return {
		onMoveUp: () => {
			const action = moveItemUp({ id });
			dispatch(action);
		},
		onMoveDown: () => {
			const action = moveItemDown({ id });
			dispatch(action);
		},
		onRemove: () => {
			const action = removeItem({ id });
			dispatch(action);
		},
		onUpdateSource: (source) => {
			const action = updateSource(id, source);
			dispatch(action);
		},
		onCancel: () => {
			const action = setStatus(id, STATUS_CANCELLED);
			dispatch(action);
		},
		onSkip: () => {
			const action = setStatus(id, STATUS_SKIPPED);
			dispatch(action);
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Subject);
