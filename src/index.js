import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./redux/dataReducer";

let initialState = [];
let storedTransactions = localStorage.getItem("transactions");

if (storedTransactions) {
  initialState = JSON.parse(storedTransactions);
}

const store = createStore(
  dataReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App list={initialState} />
  </Provider>,
  document.getElementById("root")
);
