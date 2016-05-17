import * as types from './types';

export function appendItem (item) {
	return {
		type: types.APPEND_ITEM,
		item,
	};
}

export function prependItem (item) {
	return {
		type: types.PREPEND_ITEM,
		item,
	};
}

export function removeItem (item) {
	return {
		type: types.REMOVE_ITEM,
		item,
	};
}

export function moveItemUp (item) {
	return {
		type: types.MOVE_ITEM_UP,
		item,
	};
}

export function moveItemDown (item) {
	return {
		type: types.MOVE_ITEM_DOWN,
		item,
	};
}
