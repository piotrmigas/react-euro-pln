const initialState = {
  name: "",
  amount: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_RATE":
      return {
        ...state,
        rate: action.payload
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    case "HANDLE_CHANGE":
      return { ...state, [action.field]: action.payload };
    default:
      return state;
  }
}
