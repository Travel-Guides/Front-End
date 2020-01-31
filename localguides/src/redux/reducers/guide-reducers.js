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

// REGISTER
export const guideReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_GUIDE_START:
      return {
        ...state,
        error: "",
        isFetching: true,
        fetchingMessage: action.payload
      };
    case SIGNUP_GUIDE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetchingMessage: "",
        error: false
      };
    case SIGNUP_GUIDE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };

    // LOGIN
    case LOGIN_GUIDE_START:
      return {
        ...state,
        error: "",
        isFetching: true,
        fetchingMessage: action.payload
      };
    case LOGIN_GUIDE_SUCCESS:
      localStorage.setItem("token", action.payload);
      localStorage.setItem("email", action.guide);
      return {
        ...state,
        isFetching: false,
        fetching_message: "",
        token: action.payload,
        email: action.guide,
        error: false
      };

    case LOGIN_GUIDE_FAILURE:
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
    case LOGIN_TOURIST_START:
      return {
        ...state,
        error: "",
        isFetching: true,
        fetchingMessage: action.payload
      };

    // LOGIN
    case LOGIN_TOURIST_SUCCESS:
      localStorage.setItem("token", action.payload);
      localStorage.setItem("email", action.tourist);
      return {
        ...state,
        isFetching: false,
        fetching_message: "",
        token: action.payload,
        email: action.tourist,
        error: false
      };

    case LOGIN_TOURIST_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

// LOGIN
// export const guidesLogin = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// export const touristLogin = (state = initialState, action) => {
//   switch (action.type) {

//     default:
//       return state;
//   }
// };

const initialState = {
  //SIGNUP
  firstName: localStorage.getItem("firstName"),
  lastName: localStorage.getItem("lastName"),
  email: localStorage.getItem("email"),
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
  users: [],
  addUsers: [],
  isLoadingLOGIN: false,
  successLOGIN: false,
  error: false
};
