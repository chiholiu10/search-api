export const initialState = {
  result: [],
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "getData":
      return {
        state,
        result: action.data,
      };
    case "getResult":
      return {
        state,
        // result: state.result.includes(action.data),
      };
    default:
      return state;
  }
};
