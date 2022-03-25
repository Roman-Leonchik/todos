import styled from "styled-components";

export const StyledInputWrapp = styled.form`
    position: relative;
    margin-bottom: 25px;
    box-shadow: ${({theme}) => theme.darkBlue} 0 0 20px;
    &:before {
        content: "";
        display: block;
        position: absolute;
        width: 24px;
        height: 24px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.darkBlue};
        left: 22px;
        top: 0;
        bottom: 0;
        margin: auto;
    }
`;

export const StyledInput = styled.input`
    background-color: ${({theme}) => theme.inputBg};
    color: ${({theme}) => theme.veryDarkBlue};
    border: none;
    height: 65px;
    border-radius: 5px;
    outline: none;
    padding-left: 70px;
    font-size: 18px;
    letter-spacing: -0.2px;
    width: 100%;
    line-height: 0;
    padding-top: 5px;
    ::placeholder {
        color: ${({theme}) => theme.darkBlue};
        transition: 0.3s;
    }
    &:focus {
        ::placeholder {
            font-size: 0;
            opacity: 0;
        }
    }
`;