const initialState = {
	all: true,
	no: true,
	t1: true,
	t2: true,
	t3: true
};

const sideBarReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ALL':
			return {
				all: !state.all,
				no: !state.all,
				t1: !state.all,
				t2: !state.all,
				t3: !state.all
			};
		case 'NO':
			return { ...state, no: !state.no, all: false };
		case 'T1':
			return { ...state, t1: !state.t1, all: false };
		case 'T2':
			return { ...state, t2: !state.t2, all: false };
		case 'T3':
			return { ...state, t3: !state.t3, all: false };
		default:
			return state;
	}
};
export default sideBarReducer;
