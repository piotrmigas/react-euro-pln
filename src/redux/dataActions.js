import axios from "axios";

export const getRate = () => dispatch => {
  axios.get("https://api.exchangeratesapi.io/latest?base=EUR").then(res => {
    dispatch({
      type: "GET_RATE",
      payload: res.data.rates.PLN
    });
  });
};

export const handleNameChange = e => dispatch => {
  dispatch({
    type: "HANDLE_NAME",
    payload: e.target.value
  });
};

export const handleAmountChange = e => dispatch => {
  let amountVal = e.target.value;
  dispatch({
    type: "HANDLE_AMOUNT",
    payload: +amountVal
  });
};
