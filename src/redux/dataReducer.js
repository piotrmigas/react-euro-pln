const initialState = {
  name: "",
  amount: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_RATE":
      return {
        ...state,
        rate: action.payload
      };
    case "HANDLE_NAME":
      return {
        ...state,
        name: action.payload
      };
    case "HANDLE_AMOUNT":
      return {
        ...state,
        amount: action.payload
      };
    default:
      return state;
  }
}
