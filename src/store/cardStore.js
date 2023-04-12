import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cardReducer from "../reducer/cardReducer";

const configureStore = () => {
  const store = createStore(cardReducer, compose(applyMiddleware(thunk)));
  return store;
};
export default configureStore;
