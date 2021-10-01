import styled from "styled-components";
import theme from "../../styles/Themes";

export const SearchResultBlock = styled.div.attrs({
    'data-testid': 'search-result'
})`
    display: inline-flex;
    border: 1px solid lightgrey;
    padding: 5px;
    width: 100%;
`;

export const SearchResultSpan = styled.span`
    align-items: center;
    justify-content: flex-end;
    margin-left: 5px;
`;

export const SearchResultComponent = styled.div`
     width: 100%;
`;