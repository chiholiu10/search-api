import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MockData } from "../../data/mockData";
import { store } from "../../Store";
import { screen } from "@testing-library/dom";
import { SearchResult } from "./SearchResult";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

it("SearchResult Component test props", () => {
    const wrap = mount(
        <Provider store={store}>
            <SearchResult currentInput={"test"} currentResult={MockData} loadingData={false} dispatch={jest.fn()} currentInputLength={1} />
        </Provider>
    );
    const container = wrap.find(SearchResult).first();

    expect(container.prop('currentInput')).toBe('test');
});

it("SearchResult Component loadingData props", () => {
    render(
        <SearchResult currentInput={"test"} currentResult={MockData} loadingData={false} dispatch={jest.fn()} currentInputLength={1} />
    )
    const checkWeatherData = screen.queryByTestId("search-result");
});

it("SearchResult Component loadingData props false", () => {
    render(
        <SearchResult currentInput={"test"} currentResult={MockData} loadingData={false} dispatch={jest.fn()} currentInputLength={1} />
    );
    const checkWeatherData = screen.queryByTestId("search-result");

});

it("SearchResult Component currentInputLength is 0 character", () => {
    render(
        <Provider store={store}>
            <SearchResult currentInput={"test"} currentResult={MockData} loadingData={false} dispatch={jest.fn()} currentInputLength={1} />
        </Provider>
    );

    const checkWeatherData = screen.queryByTestId("search-result");
    console.log(checkWeatherData)
});

it("SearchResult Component currentInputLength is bigger than 2 characters", () => {
    render(
        <SearchResult currentInput={"test"} currentResult={MockData} loadingData={true} dispatch={jest.fn()} currentInputLength={2} />
    );

    const checkWeatherData = screen.queryByTestId("search-result");
});