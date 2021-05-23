import { createStore, combineReducers } from "redux";
import reducer from "./reducer";

const reducers = combineReducers({ reducer });

let store = createStore(reducers);

export default store;
