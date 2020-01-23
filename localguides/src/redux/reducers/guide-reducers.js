// ACTION TYPES
import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
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

export const guideReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        error: "",
        isFetching: true,
        fetchingMessage: action.payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchingMessage: "",
        error: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export const touristReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_TOURIST_START:
      return {
        ...state,
        error: "",
        isFetching: true,
        fetchingMessage: action.payload
      };
    case SIGNUP_TOURIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchingMessage: "",
        error: false
      };
    case SIGNUP_TOURIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

const initialState = {
  //SIGNUP
  firstName: localStorage.getItem("firstName"),
  lastName: localStorage.getItem("firstName"),
  email: "",
  password: "",
  // TRIPS
  guideTrips: JSON.parse(localStorage.getItem("trip")),
  addTrips: [],

  token: localStorage.getItem("token"),
  // DATA
  tripsData: [],
  userData: [],
  guides: [],
  tourists: [],
  addUser: [],

  // --- ///
  changed: false,
  isFetching: false,
  fetchingMessage: "",
  errorMessage: "",
  addingGuide: false,
  addingTourist: false,
  users: [],
  addUsers: [],
  isLoadingLOGIN: false,
  successLOGIN: false,
  error: false
};
