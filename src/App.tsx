import { FC } from "react";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { SearchResult } from "./components/SearchResult/SearchResult";
import GlobalStateProvider from "./store/GlobalStateProvider";

export const App: FC = () => {
  return (
    <GlobalStateProvider>
      <SearchInput />
      <SearchResult />
    </GlobalStateProvider>
  );
};
