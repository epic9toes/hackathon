import { legacy_createStore as createStore, applyMiddleware } from "redux";
import categoryReducer from "./category/categoryReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const store = createStore(categoryReducer);
export default store;

store.subscribe(() =>
  AsyncStorage.setItem(
    "persistedState",
    JSON.stringify(store.getState())
  ).catch((error) => console.error(error.message))
);
