import { createStore } from "redux";
import cardReducer from "../reducer/cardReducer.js";

const cardStore = () => {
  const store = createStore(cardReducer);
  return store;
};

export default cardStore;
