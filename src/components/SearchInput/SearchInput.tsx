import { FC, useContext, useEffect, useState } from "react";
import { Context } from "../../Store";
import {
  SearchInputBlock,
  SearchInputClose,
  SearchInputField,
} from "../SearchInput.styles";

export const SearchInput: FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [checkInput, setCheckInput] = useState<boolean>(false);
  const [state, dispatch] = useContext<any>(Context);

  const fetchData = async () => {
    const data = await fetch(`http://localhost:3000/search\?q\=`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "getData", data }));
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

  return (
    <SearchInputBlock>
      <SearchInputBlock role="search">
        <SearchInputField
          type="text"
          value={inputText}
          placeholder={"Zoeken"}
          onChange={(e) => getResult(e.target.value)}
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
