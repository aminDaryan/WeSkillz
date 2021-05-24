import {
  ADD_TOKEN,
  ADD_USER_INFO,
  REMOVE_TOKEN,
  REMOVE_USER_INFO,
} from "./actions";

const initialState = {
  token: "",
  userInfo: {},
};

const countReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TOKEN:
      return { ...state, token: JSON.stringify(action.payload) };
    case REMOVE_TOKEN:
      return { ...state, token: "" };
    case ADD_USER_INFO:
      return { ...state, userInfo: JSON.stringify(action.payload) };
    case REMOVE_USER_INFO:
      return { ...state, userInfo: {} };
    default:
      return state;
  }
};

export default countReducer;
