import * as listTypes from './types';
import * as itemTypes from '../subject/types';
import itemReducer from '../subject/reducer';

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
	const { item } = action;
	let list;
	switch (action.type) {
		case listTypes.PREPEND_ITEM:
			return [
				item,
				...state,
			];
		case listTypes.APPEND_ITEM:
			return [
				...state,
				item,
			];
		case listTypes.REMOVE_ITEM:
			return state.filter(({ id }) => {
				return id !== item.id;
			});
		case listTypes.MOVE_ITEM_UP:
			list = [...state];
			moveUp(list, findIndex(list, item));
			return list;
		case listTypes.MOVE_ITEM_DOWN:
			list = [...state];
			moveDown(list, findIndex(list, item));
			return list;
		case itemTypes.SET_STATUS:
		case itemTypes.UPDATE_SOURCE:
			return state.map((item) => {
				if (item.id !== action.id) {
					return item;
				}
				return itemReducer(item, action);
			});
		default:
			return state;
	}
}
