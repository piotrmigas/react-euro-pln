import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

let list = [];
let storedTransactions = localStorage.getItem("transactions");

if (storedTransactions) {
  list = JSON.parse(storedTransactions);
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <App list={list} />
    </Provider>,
    document.getElementById("root")
  );
});
