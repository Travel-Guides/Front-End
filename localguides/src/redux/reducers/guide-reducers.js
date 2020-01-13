// ACTION TYPES
import {
  SIGNUP_GUIDE_START,
  SIGNUP_GUIDE_SUCCESS,
  SIGNUP_GUIDE_FAILURE,
  SIGNUP_TOURIST_START,
  SIGNUP_TOURIST_SUCCESS,
  SIGNUP_TOURIST_FAILURE,
  LOGIN_GUIDE_START,
  LOGIN_GUIDE_SUCCESS,
  LOGIN_GUIDE_FAILURE,
  LOGIN_TOURIST_START,
  LOGIN_TOURIST_SUCCESS,
  LOGIN_TOURIST_FAILURE,
  LOG_OUT
} from "../actions/index";

// REDUCER
const initialState = {
  // GUIDE SIGNUP
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
  city: "",
  bio: "",
  // --- ///
  guideData: [],
  isFetching: false,
  addingGuide: false,
  error: ""
};

export const guideReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
