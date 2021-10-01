import { FC, memo } from "react";
import { connect, ConnectedProps } from "react-redux";
import { MakeBold } from "../../hooks/matchCharacter";
import { SearchResultBlock, SearchResultComponent, SearchResultSpan } from "./SearchResult.styles";

type SearchTerm = {
  searchterm: string;
  nrResults: number;
}

export const SearchResult: FC<SearchResultProps> = ({
  currentInput,
  loadingData,
  currentResult,
  currentInputLength
}) => {
  const getResult = currentResult.filter((item: SearchTerm) => item.searchterm.toLowerCase().match(currentInput))

  return (
    <SearchResultComponent>
      {loadingData && currentInputLength > 2 && getResult.map((item: SearchTerm, index: number) => {
        const currentResult = item.searchterm;
        return (
          <SearchResultBlock key={index} data-testid="search-result">
            <MakeBold currentResult={item.searchterm} keyword={currentInput} />
            <SearchResultSpan>{"(" + item.nrResults + ")"}</SearchResultSpan>
          </SearchResultBlock>
        )
      })}
    </SearchResultComponent>
  )
};

const mapStateToProps = (state: any) => {
  return {
    currentInput: state.inputValue || "",
    currentResult: state.result?.suggestions || [],
    loadingData: state.loading,
    currentInputLength: state.inputValue.length
  };
};

const connector = connect(mapStateToProps);
type SearchResultProps = ConnectedProps<typeof connector>;
export default connector(memo(SearchResult));