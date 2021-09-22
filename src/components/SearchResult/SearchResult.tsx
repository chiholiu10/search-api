import { FC, useReducer } from "react";
import { initialState, reducer } from "../../hooks/useReducer";

export const SearchResult: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.result);
  return <div>Hello</div>;
};
