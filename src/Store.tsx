import { FC, createContext, useReducer } from "react";
import { initialState, reducer } from "./hooks/useReducer";

interface Props {
  result: any;
}

const Store: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;
