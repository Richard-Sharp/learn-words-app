const initialState = {
	userId: '',
	name: ''
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_USER':
			return {
				...state,
				userId: action.user.uid,
				name: action.user.displayName
			}
		default:
			return state;
	}
}

export default userReducer;