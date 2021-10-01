import ReactDOM from "react-dom";
import { App } from "./App";
import { applyMiddleware, createStore } from 'redux';
import { Provider } from "react-redux";
import { reducer } from './reducer/appReducer';
import thunk from "redux-thunk";

export const store = createStore(
    reducer,
    applyMiddleware(thunk),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root")
);
