import ActionConst from "../actions/types";

const initialState = {
	userData: { progress: 0 },
	menuKey: "ContinueTo",
	courseDetails: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ActionConst.SET_USER_DATA:
			return {
				...state,
				userData: action.payload,
			};
		case ActionConst.SET_MENU_KEY:
			return {
				...state,
				menuKey: action.payload,
			};
		case ActionConst.SET_COURSE_DETAILS:
			return {
				...state,
				courseDetails: action.payload,
			};
		default:
			return state;
	}
}
