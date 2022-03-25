import styled from "styled-components";
import { media } from "src/client/lib/styled-components/variables";

interface IProps {
    checked?: boolean;
}

export const StyledButtonDelete = styled.button`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: none;
    background: none;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 0;
    bottom: 0;
    margin: auto;
    padding: 0;
    opacity: 0;
    fill: ${({theme}) => theme.veryDarkBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.tablet`
        opacity: 1;
    `}
`;

export const StyledTodoItem = styled.div<IProps>`
    width: 100%;
    text-align: left;
    padding: 22px 70px 20px 70px;
    color: ${({theme, checked}) => checked ? theme.lightBlue : theme.darkBlue};
    position: relative;
    text-decoration: ${({checked}) => checked ? "line-through" : "inherit"};
    height: 65px;
    border-bottom: 1px solid ${({theme}) => theme.darkBlue};
    &:hover {
        color: ${({theme, checked}) => checked ? theme.lightBlue : theme.veryDarkBlue};
        ${StyledButtonDelete} {
            opacity: 1;
        }
    }
`;

export const StyledButtonCheck = styled.button<IProps>`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: none;
    background: ${({theme, checked}) => checked ? "linear-gradient(#57ddff,#c058f3)" : theme.darkBlue};
    position: absolute;
    left: 22px;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    &:before {
        content: "";
        position: absolute;
        width: 23px;
        height: 23px;
        border-radius: 50%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: ${({theme, checked}) => checked ? "inherit" : theme.inputBg};
        background-image: ${({checked}) => checked ? `url("./svg/icon-check.svg")` : "none"};
        background-repeat: no-repeat;
        background-position: center;
    }
    &:hover {
        background: linear-gradient(#57ddff,#c058f3);
    }
`;

export const StyledItemText = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;