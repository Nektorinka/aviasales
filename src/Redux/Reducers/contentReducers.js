const contentReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_TICKETS_IN_STORE':
			return [ ...state, ...action.payload ];
		default:
			return state;
	}
};

export default contentReducer;
