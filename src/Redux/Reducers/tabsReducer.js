const initialState = {
	cheap: true,
	fast: false
};

const tabsReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHEAP':
			return {
				cheap: true,
				fast: false
			};
		case 'FAST':
			return {
				cheap: false,
				fast: true
			};
		default:
			return state;
	}
};

export default tabsReducer;
