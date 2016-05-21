import uuid from 'node-uuid';
import {
	SET_STATUS,
	UPDATE_SOURCE,
} from './types';

function buildSubject () {
	return {
		id: uuid(),
		source: null,
		status: null,
	};
}

export default function (state = buildSubject(), action = {}) {
	if (action.id !== state.id) {
		return state;
	}
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
		default:
			return state;
	}
}
