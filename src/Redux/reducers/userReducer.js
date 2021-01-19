import {ADD_USER} from "../actions/actionsTypes";

const initialState = {
	userId: null,
	email: null
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				userId: action.user.uid,
				email: action.user.email
			}
		default:
			return state;
	}
}

export default userReducer;