import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MockData } from "../../data/mockData";
import { store } from "../../Store";
import { SearchResult } from "./SearchResult";

it("SearchResult Component test props", () => {
    const { queryByTestId } = render(
        <Provider store={store}>
            <SearchResult currentInput={"test"} currentResult={MockData} loadingData={false} dispatch={jest.fn()} currentInputLength={false} />
        </Provider>
    );
    expect(queryByTestId("no-search-result")).toBeTruthy();
});

it("SearchResult Component no loadingData", () => {
    const { queryByTestId } = render(
        <Provider store={store}>
            <SearchResult currentInput={"test"} currentResult={MockData} loadingData={true} dispatch={jest.fn()} currentInputLength={true} />
        </Provider>
    );
    expect(queryByTestId("search-result")).toBeTruthy();
});

it("SearchResult Component loadingData available", () => {
    const { queryByTestId } = render(
        <Provider store={store}>
            <SearchResult currentInput={""} currentResult={MockData} loadingData={true} dispatch={jest.fn()} currentInputLength={true} />
        </Provider>
    );
    expect(queryByTestId("search-result")).toBeTruthy();
});

it("SearchResult Component currentInputLength is 0 character", () => {
    const { queryByTestId } = render(
        <Provider store={store}>
            <SearchResult currentInput={""} currentResult={MockData} loadingData={true} dispatch={jest.fn()} currentInputLength={true} />
        </Provider>
    );
    expect(queryByTestId("search-result")).toBeTruthy();
});

it("SearchResult Component currentInputLength is bigger than 2 characters", () => {
    const { queryByTestId } = render(
        <Provider store={store}>
            <SearchResult currentInput={"trui"} currentResult={MockData} loadingData={true} dispatch={jest.fn()} currentInputLength={true} />
        </Provider>
    );
    expect(queryByTestId("search-result")).toBeTruthy();
});