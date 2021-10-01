import { FC, memo, useState } from "react";
import {
  SearchInputBlock,
  SearchInputClose,
  SearchInputField,
} from "./SearchInput.styles";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { clearInputValue, inputValue } from "../../actions";
import { State } from "../../reducer/appReducer";

export const SearchInput: FC<SearchResultProps> = ({ currentInput, loadData }) => {
  const [toggleFocus, setToggleFocus] = useState<boolean>(false);
  const [checkInput, setCheckInput] = useState<boolean>(false);
  const dispatch = useDispatch();

  const getResult = (value: string) => {
    dispatch(inputValue(value));
    setCheckInput(value.length > 0 ? true : false);
  };

  const removeInputText = () => {
    dispatch(clearInputValue());
    setCheckInput(false);
  };

  const onfocus = () => setToggleFocus(true);
  const removeOnfocus = () => setToggleFocus(false);

  return (
    <div>
      {loadData && (
        <SearchInputBlock toggleFocus={toggleFocus}>
          <SearchInputField
            data-testid="search-input-field"
            type="text"
            aria-label="search-bar"
            placeholder={"Zoeken"}
            name="search"
            value={currentInput}
            onChange={(e) => getResult(e.target.value)}
            onFocus={() => onfocus()}
            onBlur={() => removeOnfocus()}
          />
          <SearchInputClose
            textAvailable={checkInput}
            onClick={() => removeInputText()}
          >
            X
          </SearchInputClose>
        </SearchInputBlock>
      )}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    currentInput: state.inputValue || "",
    loadData: state.loading
  };
};

const connector = connect(mapStateToProps);
type SearchResultProps = ConnectedProps<typeof connector>;
export default connector(memo(SearchInput));