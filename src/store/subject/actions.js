import * as types from './types';

export function setStatus (id, status) {
	return {
		type: types.SET_STATUS,
		id,
		status,
	};
}

export function updateSource (id, source) {
	return {
		type: types.UPDATE_SOURCE,
		id,
		source,
	};
}
