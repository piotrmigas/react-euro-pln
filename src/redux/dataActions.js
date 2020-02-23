import axios from "axios";

export const getRate = () => dispatch => {
  axios.get("https://api.exchangeratesapi.io/latest?base=EUR").then(res => {
    dispatch({
      type: "GET_RATE",
      payload: res.data.rates.PLN
    });
  });
};

export const handleChange = (value, field) => {
  return {
    type: "HANDLE_CHANGE",
    payload: value,
    field
  };
};

export const deleteTransaction = id => dispatch => {
  dispatch({
    type: "DELETE_TRANSACTION",
    payload: id
  });
};

export const addTransaction = transaction => dispatch => {
  dispatch({
    type: "ADD_TRANSACTION",
    payload: transaction
  });
};
