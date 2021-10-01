import { createStore } from 'redux';
import { reducer } from './reducer/appReducer';

export const store = createStore(
    reducer
);