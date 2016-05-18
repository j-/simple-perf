import * as types from './types';

const UP = -1;
const DOWN = 1;

/**
 * Looks in a list for a given item. Matches by ID.
 * @param {Array} list Array to search
 * @param {String} item.id Item ID to search for
 * @return {Number} Index of item or -1 if not found
 */
function findIndex (list, { id }) {
	return list.findIndex((item) => {
		return item.id === id;
	});
}

/**
 * Swap array items at two given indexes.
 * @param {Array} arr Array to mutate
 * @param {Number} i Index of first item
 * @param {Number} j Index of second item
 */
function swap (arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

/**
 * Swaps the item at a given index with the item before it.
 * @param {Array} arr Array to mutate
 * @param {Number} i Index of item to move up
 */
function moveUp (arr, i) {
	if (i <= 0) {
		return;
	}
	swap(arr, i - 1, i);
}

/**
 * Swaps the item at a given index with the item after it.
 * @param {Array} arr Array to mutate
 * @param {Number} i Index of item to move down
 */
function moveDown (arr, i) {
	if (i >= arr.length - 1) {
		return;
	} else if (i <= -1) {
		return;
	}
	swap(arr, i, i + 1);
}

export default function (state = [], action = {}) {
	let item, list;
	switch (action.type) {
		case types.PREPEND_ITEM:
			return [
				action.item,
				...state,
			];
		case types.APPEND_ITEM:
			return [
				...state,
				action.item,
			];
		case types.REMOVE_ITEM:
			return state.filter((item) => {
				return item.id !== action.item.id;
			});
		case types.MOVE_ITEM_UP:
			list = [...state];
			moveUp(list, findIndex(list, action.item));
			return list;
		case types.MOVE_ITEM_DOWN:
			list = [...state];
			moveDown(list, findIndex(list, action.item));
			return list;
		default:
			return state;
	}
}
