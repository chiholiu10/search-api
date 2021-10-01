import { types } from "../actions";

const initialState: State = {
    result: [],
    inputValue: "",
    loading: false
};

export interface State {
    result: any;
    inputValue: string;
    loading: boolean;
}

export type Actions = GET_DATA | GET_RESULT | GET_INPUT_VALUE;

interface GET_DATA {
    readonly type: "getData";
    data: any;
}

interface GET_RESULT {
    type: "getResult";
    data: any;
}

interface GET_INPUT_VALUE {
    type: "getInputValue";
    value: any;
}

export const reducer = (state = initialState, action: any): State => {
    switch (action.type) {
        case types.GET_DATA: {
            return {
                ...state,
                result: action.data,
                loading: true
            };
        }
        case types.GET_INPUT_VALUE: {
            return {
                ...state,
                inputValue: action.value
            };
        }
        case types.CLEAR_INPUT_VALUE: {
            return {
                ...state,
                inputValue: ""
            };
        }
        default:
            return state;
    }
};