import * as types from './types';

export default function (state = {}, action = {}) {
	if (action.id !== state.id) {
		return state;
	}
	switch (action.type) {
		case types.SET_STATUS:
			return {
				...state,
				id: action.id,
				status: action.status,
			};
		case types.UPDATE_SOURCE:
			return {
				...state,
				id: action.id,
				source: action.source,
			};
		default:
			return state;
	}
}
