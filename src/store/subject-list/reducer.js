import * as types from './types';

const UP = -1;
const DOWN = 1;

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
			list.splice(
				// Index to insert at
				itemIndex + UP,
				// Do not remove any items
				0,
				// Move found item
				...list.splice(itemIndex, itemIndex + 1)
			);
			return list;
		case types.MOVE_ITEM_DOWN:
			itemIndex = state.findIndex((item, i) => {
				return item.id === action.item.id;
			});
			list = [...state];
			list.splice(
				// Index to insert at
				itemIndex + DOWN,
				// Do not remove any items
				0,
				// Move found item
				...list.splice(itemIndex, itemIndex + 1)
			);
			return list;
		default:
			return state;
	}
}
