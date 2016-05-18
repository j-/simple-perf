import * as types from './types';

const UP = -1;
const DOWN = 1;

function swap (arr, i, j) {
	[arr[i], arr[j]] = [arr[j], arr[i]];
}

function moveUp (arr, i) {
	if (i <= 0) {
		return;
	}
	swap(arr, i - 1, i);
}

function moveDown (arr, i) {
	if (i >= arr.length - 1) {
		return;
	}
	swap(arr, i, i + 1);
}

export default function (state = [], action = {}) {
	let itemIndex, item, list;
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
			itemIndex = state.findIndex((item, i) => {
				return item.id === action.item.id;
			});
			list = [...state];
			if (itemIndex > -1) {
				moveUp(list, itemIndex);
			}
			return list;
		case types.MOVE_ITEM_DOWN:
			itemIndex = state.findIndex((item, i) => {
				return item.id === action.item.id;
			});
			list = [...state];
			if (itemIndex > -1) {
				moveDown(list, itemIndex);
			}
			return list;
		default:
			return state;
	}
}
