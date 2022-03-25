import styled from "styled-components";

export const StyledHeader = styled.header`
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledHeaderTitle = styled.h1`
    font-size: 40px;
    text-transform: uppercase;
    letter-spacing: 15px;
    font-weight: 700;
    margin: 0;
    color: ${({theme}) => theme.veryLightGray};
`;

export const StyledHeaderButton = styled.button`
    padding: 0;
    background: none;
    border: none;
    width: 26px;
    height: 26px;
    cursor: pointer;
`;