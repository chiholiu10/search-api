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
      {/* Line 22 all needs to evaluate to true in order for your tests to run, if loadingData is false, or if currentInputLength <= 2, or if the getResult is empty (which means that the currentInput must match the string in the MockData) then none of this stuff is rendered, this means that the queryByTestId will *always* fail due to the fact its not in the DOM */}
      {loadingData && currentInputLength > 2 && getResult.map((item: SearchTerm, index: number) => {
        const currentResult = item.searchterm;
        return (
          <SearchResultBlock key={index}>
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