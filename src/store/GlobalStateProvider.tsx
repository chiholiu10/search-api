import { FC } from "react";
import useGlobalState from "./useReducer";
import Context from "./context";

interface GlobalStateProps {
    children?: React.ReactNode | React.ReactChild[];
}

const GlobalStateProvider: FC<GlobalStateProps> = ({ children }) => {
    return (
        <Context.Provider value={useGlobalState()}>{children}</Context.Provider>
    )
}

export default GlobalStateProvider;