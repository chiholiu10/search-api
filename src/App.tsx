import { FC } from "react";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { SearchResult } from "./components/SearchResult/SearchResult";
import Store from "./Store";

export const App: FC = () => {
  return (
    <Store result={null}>
      <SearchInput />
      <SearchResult />
    </Store>
  );
};
