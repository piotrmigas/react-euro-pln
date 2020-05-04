export const getRate = () => async (dispatch) => {
  try {
    const res = await fetch("https://api.exchangeratesapi.io/latest?base=EUR");
    const data = await res.json();
    dispatch({
      type: "GET_RATE",
      payload: data.rates.PLN,
    });
  } catch (err) {
    dispatch({
      type: "GET_RATE_FAILURE",
      payload: err,
      error: true,
    });
  }
};

export const handleChange = (value, field) => {
  return {
    type: "HANDLE_CHANGE",
    payload: value,
    field,
  };
};

export const deleteTransaction = (id) => (dispatch) => {
  dispatch({
    type: "DELETE_TRANSACTION",
    payload: id,
  });
};

export const addTransaction = (transaction) => (dispatch) => {
  dispatch({
    type: "ADD_TRANSACTION",
    payload: transaction,
  });
};
