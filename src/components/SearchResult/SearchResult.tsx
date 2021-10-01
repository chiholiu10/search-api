import { RefObject } from "react";
import { FC, memo, useEffect, useRef } from "react";
import { connect, ConnectedProps } from "react-redux";
import { MakeBold } from "../../hooks/matchCharacter";
import { SearchNoResult, SearchResultBlock, SearchResultBlockShow, SearchResultComponent, SearchResultSpan } from "./SearchResult.styles";

type SearchTerm = {
  searchterm: string;
  nrResults: number;
}

interface Event {
  readonly target: EventTarget | null;
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
      {(loadingData && currentInputLength) ?
        <SearchResultBlockShow>
          {getResult.map((item: SearchTerm, index: number) => (
            <SearchResultBlock key={index} >
              <MakeBold currentResult={item.searchterm} keyword={currentInput} />
              <SearchResultSpan>{"(" + item.nrResults + ")"}</SearchResultSpan>
            </SearchResultBlock>
          ))} </SearchResultBlockShow> : <SearchNoResult></SearchNoResult>
      }

    </SearchResultComponent >
  )
};

const mapStateToProps = (state: any) => {
  return {
    currentInput: state.inputValue || "",
    currentResult: state.result?.suggestions || [],
    loadingData: state.loading,
    currentInputLength: state.inputValue.length > 2
  };
};

const connector = connect(mapStateToProps);
type SearchResultProps = ConnectedProps<typeof connector>;
export default connector(memo(SearchResult));