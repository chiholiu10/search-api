import '@testing-library/jest-dom';
// Importing screen from @testing-library/dom is restricted, you should use @testing-library/react
import { render, screen } from "@testing-library/react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MockData } from "../../data/mockData";
import { store } from "../../Store";
import { SearchResult } from "./SearchResult";

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
    const {getByTestId} = render(
        <Provider store={store}>
            {/* The reason the code broke is because these props were causing the rendering to fail inside the comopnent */}
            <SearchResult currentInput={"calvin klein trui heren oranje"} currentResult={MockData} loadingData={true} dispatch={jest.fn()} currentInputLength={4} />
        </Provider>
    );
    // if you're expecting something to exist, use getBy as it will error if it doesnt find it - easier than using query
    getByTestId("search-result");
});

it("SearchResult Component currentInputLength is bigger than 2 characters", () => {
    render(
        <SearchResult currentInput={"test"} currentResult={MockData} loadingData={true} dispatch={jest.fn()} currentInputLength={2} />
    );

    const checkWeatherData = screen.queryByTestId("search-result");
});