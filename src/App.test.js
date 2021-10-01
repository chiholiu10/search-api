import { shallow } from "enzyme";
import { App } from './App';
import { Provider } from "react-redux";
import { store } from "./Store";

test('renders App component', () => {
  const appComponent = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(appComponent).toHaveLength(1);
});