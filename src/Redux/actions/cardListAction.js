import {
	FETCH_CARD_LIST,
	FETCH_CARD_LIST_REJECT,
	FETCH_CARD_LIST_RESOLVE } from "../actions/actionsTypes";

export const cardListAction = () => ({type: FETCH_CARD_LIST});

export const cardListResolveAction = (payload) => ({
	type: FETCH_CARD_LIST_RESOLVE,
	payload
})

export const cardListRejectAction = (err) => ({
	type: FETCH_CARD_LIST_REJECT,
	err
})