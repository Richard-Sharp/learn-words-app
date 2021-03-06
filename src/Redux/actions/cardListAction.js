import {
	FETCH_CARD_LIST,
	FETCH_CARD_LIST_REJECT,
	FETCH_CARD_LIST_RESOLVE } from "../actions/actionsTypes";

//ActionCreators:
export const cardListAction = () => ({type: FETCH_CARD_LIST});

export const cardListResolveAction = (payload) => ({
	type: FETCH_CARD_LIST_RESOLVE,
	payload
})

export const cardListRejectAction = (err) => ({
	type: FETCH_CARD_LIST_REJECT,
	err
})

//ThunkCreators:
export const fetchCardListTC = (getData) => {
	return (dispatch, getState) => {
		dispatch(cardListAction());
		getData().once('value').then(res => {
			dispatch(cardListResolveAction(res.val()));
		}).catch(err => {
			dispatch(cardListRejectAction(err));
		});
	}
}
export const setNewWordTC = (getData) => {
	return (dispatch, getState) => {
		dispatch(cardListAction());
		getData().once('value').then(res => {
			dispatch(cardListResolveAction(res.val()));
		}).catch(err => {
			dispatch(cardListRejectAction(err));
		});
	}
}

