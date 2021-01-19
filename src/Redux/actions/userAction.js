import {ADD_USER} from "./actionsTypes";

export const addUserAction = (user) => ({
	type: ADD_USER,
	user
});