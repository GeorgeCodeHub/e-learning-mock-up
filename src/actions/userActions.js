import ActionConst from "./types";

//Set_username
export const setUserData = (userData) => (dispatch) => {
	dispatch({
		type: ActionConst.SET_USER_DATA,
		payload: userData,
	});
};

//Set_Menu key
export const setMenuKey = (menuKey) => (dispatch) => {
	dispatch({
		type: ActionConst.SET_MENU_KEY,
		payload: menuKey,
	});
};

export const setCourseDetails = (courseDetails) => (dispatch) => {
	dispatch({
		type: ActionConst.SET_COURSE_DETAILS,
		payload: courseDetails,
	});
};
