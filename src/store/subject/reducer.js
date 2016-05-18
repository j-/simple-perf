import {
	SET_STATUS,
	UPDATE_SOURCE,
} from './types';

export default function (state = {}, action = {}) {
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
