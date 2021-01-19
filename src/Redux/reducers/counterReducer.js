import {MINUS, PLUS} from "../actions/actionsTypes";

const counterReducer = (state = {count: 0}, action) => {
	switch (action.type) {
		case PLUS:
			return {
				...state,
				count: state.count + action.payload
			}
			break;
		case MINUS:
			return {
				...state,
				count: state.count - action.payload
			}
			break;
		default:
			return state;
	}
}

export default counterReducer;