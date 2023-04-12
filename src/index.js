import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./scss/style.scss";
import { Provider } from "react-redux";
import configureStore from "./store/cardStore.js";
import { getCardsFromDatabase } from "./action/cardAction";
const store = configureStore();

const result = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(getCardsFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById("root"));
});
