import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./redux/dataReducer";
import throttle from "lodash/throttle";

let initialState = {
  transactions: [],
};

const persistedState = localStorage.getItem("transactions");
if (persistedState) {
  initialState = JSON.parse(persistedState);
}

const store = createStore(
  dataReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

store.subscribe(
  throttle(() => {
    localStorage.setItem("transactions", JSON.stringify(store.getState()));
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
