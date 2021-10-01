import styled from "styled-components";

export const SearchInputBlock = styled.div<{ toggleFocus: boolean }>`
    border: 1px solid ${(props => props.toggleFocus === true ? "black" : "lightgrey")};
    min-width: 250px;
    max-width: 350px;
    width: 100%;
    padding: 5px 8px;
    position: relative;
    display: inline-flex;
`;

export const SearchInputField = styled.input`
    border: none;
    width: 100%;
    &:focus {
        outline: none;
    }
`;

export const SearchInputClose = styled.span<{ textAvailable: boolean }>`
    margin-right: 40px;
    :hover {
        cursor: pointer;
    }
    display: ${(props: any) => props.textAvailable ? "block" : "none"};
`;