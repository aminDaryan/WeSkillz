import { ADD_TOKEN, ADD_USER_INFO } from "./actions";

const initialState = {
  token: "",
  userInfo: {},
};

const countReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TOKEN:
      localStorage.setItem("token", JSON.stringify(action.payload));
      return { ...state, token: action.payload };
    case ADD_USER_INFO:
      localStorage.setItem("user-info", JSON.stringify(action.payload));
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default countReducer;
