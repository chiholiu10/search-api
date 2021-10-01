import styled from "styled-components";

export const SearchInputBlock = styled.div<{ toggleFocus: boolean }>`
    border: 1px solid ${(props => props.toggleFocus === true ? "black" : "lightgrey")};
    width: 100%;
    padding: 5px 8px;
    position: relative;
    display: inline-flex;
`;

export const SearchInputField = styled.input.attrs({
    "data-testid": "search-input-field"
})`
    border: none;
    width: 100%;
    &:focus {
        outline: none;
    }
`;

export const SearchInputClose = styled.span<{ textAvailable: boolean }>`
    margin-right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        cursor: pointer;
    }
    display: ${(props: any) => props.textAvailable ? "flex" : "none"};
`;

export const SearchCloseIcon = styled.img`
    width: 20px;
    margin-right: auto;
`;

export const SearchIcon = styled.img`
    width: 20px;
    margin-right: auto;
`;
