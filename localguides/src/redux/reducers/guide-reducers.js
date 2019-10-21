// ACTION TYPES

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
