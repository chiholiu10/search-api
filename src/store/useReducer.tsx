import React, { useReducer } from "react";
import { Statement } from "typescript";

export const initialState = {
  result: [],
};

type GET_DATA = {
  readonly type: "getData";
  readonly data: number;
}

type GET_RESULT = {
  readonly type: "getResult"
}

type Actions = GET_DATA | GET_RESULT;

type State = {
  result?: any;
}

export const reducer = (state: State, action: Actions) => {
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

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer<React.Reducer<State, Actions>>(reducer, {
    result: []
  });
  return { globalState, globalDispatch };
}

export default useGlobalState;