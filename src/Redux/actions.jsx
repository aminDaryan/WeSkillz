export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_USER_INFO = "ADD_USER_INFO";
export const REMOVE_TOKEN = "REMOVE_TOKEN";
export const REMOVE_USER_INFO = "REMOVE_USER_INFO";

export function addToken(token) {
  return { type: ADD_TOKEN, payload: token };
}

export function removeToken() {
  return { type: REMOVE_TOKEN };
}

export function addUserInfo(userInfo) {
  return { type: ADD_USER_INFO, payload: userInfo };
}

export function removeUserInfo() {
  return { type: REMOVE_USER_INFO };
}
