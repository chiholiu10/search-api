export const types = {
    GET_DATA: "GET_DATA",
    GET_INPUT_VALUE: "GET_INPUT_VALUE",
    CLEAR_INPUT_VALUE: "CLEAR_INPUT_VALUE"
};

export const getData = (data: any) => ({
    type: types.GET_DATA,
    data
});

export const inputValue = (value: any) => ({
    type: types.GET_INPUT_VALUE,
    value
});

export const clearInputValue = () => ({
    type: types.CLEAR_INPUT_VALUE,
});

