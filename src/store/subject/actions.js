import {
	SET_STATUS,
	UPDATE_SOURCE,
} from './types';

export function setStatus (id, status) {
	return {
		type: SET_STATUS,
		id,
		status,
	};
}

export function updateSource (id, source) {
	return {
		type: UPDATE_SOURCE,
		id,
		source,
	};
}
