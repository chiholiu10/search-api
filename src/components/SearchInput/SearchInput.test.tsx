import { mount, render, shallow } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../Store";
import { SearchInput } from "./SearchInput";

it("SearchInput Component current input value and loadData props", () => {
    const wrap = mount(
        <Provider store={store}>
            <SearchInput currentInput={"trui"} loadData={false} dispatch={jest.fn()} />
        </Provider>
    );
    const container = wrap.find(SearchInput).first();

    expect(container.prop('currentInput')).toBe('trui');
    expect(container.prop('loadData')).toBe(false);
});

it("SearchInput Component current input value and loadData props", () => {
    const wrap = mount(
        <Provider store={store}>
            <SearchInput currentInput={"trui"} loadData={false} dispatch={jest.fn()} />
        </Provider>
    );
    const container = wrap.find(SearchInput).first();

    expect(container.prop('currentInput')).toBe('trui');
    expect(container.prop('loadData')).toBe(false);
});

it("SearchInput Component current input value and loadData props", () => {
    const onSearchMock = jest.fn();
    const event = {
        preventDefault() { },
        target: { value: 'the-value' }
    };
    const component = render(
        <Provider store={store}>
            <SearchInput currentInput={""} loadData={false} dispatch={onSearchMock} />
        </Provider >
    );
    // component.find('input').simulate('change', event);
    // expect(onSearchMock).toBeCalledWith('the-value');
    // console.log(component)
});