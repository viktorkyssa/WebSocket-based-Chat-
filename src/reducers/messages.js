import * as types from '../constants/ActionTypes';

const messages = (state = [], action) => {
	switch(action.type) {
		case types.ADD_MESSAGE:
		case types.MESSAGE_RECEIVED:
			return [...state, {
				message: action.message,
				id: action.id,
				author: action.author
			}];
		default:
			return state;
	}
};

export default messages