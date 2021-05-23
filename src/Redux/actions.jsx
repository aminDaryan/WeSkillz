export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_USER_INFO = "ADD_USER_INFO";

export function addToken(token) {
  return { type: ADD_TOKEN, payload: token };
}

export function addUserInfo(userInfo) {
  return { type: ADD_USER_INFO, payload: userInfo };
}
