const initialState = {
	tickets: [],
	isLoading: true,
	error: false
};

const contentReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_TICKETS_IN_STORE':
			return {
				tickets: [ ...state.tickets, ...action.payload ],
				isLoading: false,
				error: false
			};

		default:
			return state;
	}
};

export default contentReducer;
