import { mount } from "enzyme";
import { Provider } from "react-redux";
import { store } from "../../Store";
import { SearchInput } from "./SearchInput";
import { SearchInputField } from './SearchInput.styles';

it("SearchInput Component no current input value and no data props", () => {
    const wrap = mount(
        <Provider store={store}>
            <SearchInput currentInput={""} loadData={false} dispatch={jest.fn()} />
        </Provider>
    );
    const container = wrap.find(SearchInput).first();

    expect(container.prop('currentInput')).toBe('');
    expect(container.prop('loadData')).toBe(false);
});

it("SearchInput Component current input value and loadData props", () => {
    const wrap = mount(
        <Provider store={store}>
            <SearchInput currentInput={"trui"} loadData={true} dispatch={jest.fn()} />
        </Provider>
    );
    const container = wrap.find(SearchInput).first();

    expect(container.prop('currentInput')).toBe('trui');
    expect(container.prop('loadData')).toBe(true);
});

it("SearchInput Component check onChange", () => {
    const onSearchMock = jest.fn();
    const event = {
        preventDefault() { },
        target: { value: "the-value" }
    }

    const wrap = mount(
        <Provider store={store}>
            <SearchInputField onChange={onSearchMock} />
        </Provider >
    );

    const inputField = wrap.find(`[data-testid="search-input-field"]`);
    inputField.simulate("change", event);
    expect(onSearchMock).toBeCalled();
});