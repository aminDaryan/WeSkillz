import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import reducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["navigation"], // navigation will not be persisted
};

const persistedReducer = persistReducer(persistConfig, reducer);

export let store = createStore(persistedReducer);
export let persistor = persistStore(store);
