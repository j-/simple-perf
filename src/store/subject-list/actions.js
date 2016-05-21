import {
	APPEND_ITEM,
	PREPEND_ITEM,
	CREATE_NEW_ITEM,
	REMOVE_ITEM,
	MOVE_ITEM_UP,
	MOVE_ITEM_DOWN,
} from './types';

export function appendItem (item) {
	return {
		type: APPEND_ITEM,
		item,
	};
}

export function prependItem (item) {
	return {
		type: PREPEND_ITEM,
		item,
	};
}

export function createNewItem () {
	return {
		type: CREATE_NEW_ITEM,
	};
}

export function removeItem (item) {
	return {
		type: REMOVE_ITEM,
		item,
	};
}

export function moveItemUp (item) {
	return {
		type: MOVE_ITEM_UP,
		item,
	};
}

export function moveItemDown (item) {
	return {
		type: MOVE_ITEM_DOWN,
		item,
	};
}
