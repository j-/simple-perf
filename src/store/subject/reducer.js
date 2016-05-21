import uuid from 'node-uuid';
import {
	SET_STATUS,
	UPDATE_SOURCE,
	MARK_FASTEST,
} from './types';
import {
	START_PERF_TEST,
} from '../subject-list/types';
import {
	STATUS_DEFAULT,
	STATUS_PENDING,
} from './statuses';

function buildSubject () {
	return {
		id: uuid(),
		source: '',
		status: STATUS_DEFAULT,
		isFastest: false,
	};
}

export default function (state = buildSubject(), action = {}) {
	// Generic actions, affect all subjects
	switch (action.type) {
		case START_PERF_TEST:
			return {
				...state,
				status: STATUS_PENDING,
				isFastest: false,
			};
	}
	if (action.id !== state.id) {
		return state;
	}
	// Specific actions, affect only one subject
	switch (action.type) {
		case SET_STATUS:
			return {
				...state,
				id: action.id,
				status: action.status,
			};
		case UPDATE_SOURCE:
			return {
				...state,
				id: action.id,
				source: action.source,
			};
		case MARK_FASTEST:
			return {
				...state,
				isFastest: true,
			};
		default:
			return state;
	}
}
