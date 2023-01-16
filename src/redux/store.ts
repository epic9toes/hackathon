import { legacy_createStore as createStore } from "redux";
import categoryReducer from "./category/categoryReducer";

const store = createStore(categoryReducer);

export default store;
