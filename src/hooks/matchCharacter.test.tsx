import { mount } from "enzyme";
import { Provider } from "react-redux";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { store } from "../Store";
import { MakeBold } from "./matchCharacter";

it("SearchResult Component test props", () => {
    const wrap = mount(
        <Provider store={store}>
            <MakeBold currentResult={"trui"} keyword={"trui"} />
        </Provider>
    );
});