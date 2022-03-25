import styled from "styled-components";
import { media } from "src/client/lib/styled-components/variables";

interface IProps {
    active?: boolean;
}

export const StyledTodoBlock = styled.div`
    background-color: ${({theme}) => theme.inputBg};
    border-radius: 5px;
    box-shadow: ${({theme}) => theme.darkBlue} 0 0 20px;
    overflow: hidden;
    ${media.tablet`
        margin-bottom: 40px;
    `}
`;

export const StyledTodoFooter = styled.div`
    padding: 18px 22px;
    font-size: 14px;
    color: ${({theme}) => theme.darkBlue};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.inputBg};
    position: relative;
    z-index: 2;
`;

export const StyledListButton = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 14px;
    ${media.tablet`
        display: none;
    `}
`;

export const StyledListMobileButton = styled(StyledTodoBlock)`
    display: none;
    min-height: 65px;
    padding: 10px;
    font-size: 18px;
    ${media.tablet`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    `}
`;

export const StyledTodoButton = styled.button<IProps>`
    font-size: inherit;
    padding: 0;
    background: none;
    border: none;
    color: ${({theme, active}) => active ? theme.active : theme.darkBlue};
    cursor: pointer;
    &:hover {
        color: ${({theme, active}) => active ? theme.active : theme.veryDarkBlue};
    }
`;