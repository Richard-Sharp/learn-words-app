import { combineReducers } from 'redux';
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
import cardListReducer from "./cardListReducer";

export default combineReducers({
	user: userReducer,
	counter: counterReducer,
	cardList: cardListReducer
});