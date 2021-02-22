const initState = {
  currencyAll: [],
};

const currencyReducer = (state = initState, action) => {
  switch (action.type) {
    case "currency_value":
      return { ...state };
    default:
      return { ...state };
  }
};

export default currencyReducer;
