import {
	SET_STATUS,
	UPDATE_SOURCE,
	MARK_FASTEST,
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

export function markFastest (id) {
	return {
		type: MARK_FASTEST,
		id,
	};
}