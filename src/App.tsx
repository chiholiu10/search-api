import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getData } from "./actions";
import { SearchComponent } from "./App.styles";
import SearchInput from "./components/SearchInput/SearchInput";
import SearchResult from "./components/SearchResult/SearchResult";
import { GlobalStyleReset } from "./styles/CssReset";
import theme from "./styles/Themes";

export const App: FC = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    fetch(`http://localhost:3000/search\?q\=`)
      .then((response) => response.json())
      .then((data) => dispatch(getData(data))).catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleReset />
      <SearchComponent>
        <SearchInput />
        <SearchResult />
      </SearchComponent>
    </ThemeProvider>
  );
};