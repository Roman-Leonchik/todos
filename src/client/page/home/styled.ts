import styled from "styled-components";

interface IProps {
    themeVariant: string;
}

export const StyledHome = styled.div`
    position: relative;
`;

export const StyledHomeContainer = styled.div`
    max-width: 570px;
    padding: 70px 15px 50px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const StyleHomeBackground = styled.div<IProps>`
    position: absolute;
    height: 300px;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${({theme}) => theme.active};
    background-image: url(${({ themeVariant }) => themeVariant === "default" ? "./img/bg-desktop-light.jpg" : "./img/bg-desktop-dark.jpg"});
    background-repeat: no-repeat;
    background-size: cover;
`;