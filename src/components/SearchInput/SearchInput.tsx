import { FC, useContext, useEffect, useState } from "react";
import {
  SearchInputBlock,
  SearchInputClose,
  SearchInputField,
} from "../SearchInput.styles";
import Context from "../../store/context";

export const SearchInput: FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [checkInput, setCheckInput] = useState<boolean>(false);
  const [globalState, globalDispatch] = useContext(Context);

  const fetchData = async () => {
    const data = await fetch(`http://localhost:3000/search\?q\=`)
      .then((response) => response.json())
      .then((data) => globalDispatch({ type: "getData", data }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getResult = (value: string) => {
    setInputText(value);
    setCheckInput(value.length > 0 ? true : false);
  };

  const removeInputText = () => {
    setInputText("");
    setCheckInput(false);
  };

  const onfocus = () => {
    console.log('hello');
  }

  return (
    <SearchInputBlock>
      <SearchInputBlock>
        <SearchInputField
          type="text"
          value={inputText}
          placeholder={"Zoeken"}
          onChange={(e) => getResult(e.target.value)}
          onFocus={() => onfocus()}
        />
        <SearchInputClose
          textAvailable={checkInput}
          onClick={() => removeInputText()}
        >
          X
        </SearchInputClose>
      </SearchInputBlock>
    </SearchInputBlock>
  );
};
