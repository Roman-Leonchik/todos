import { createGlobalStyle, css } from "styled-components";
import styledNormalize from "styled-normalize";
import "src/client/fonts/styled.css";

const globalStylesCss = css`
    ${styledNormalize};

    * {
        box-sizing: border-box;
    }

    body {
        font-size: 18px;
        line-height: 1.2;
        background-color: ${({theme}) => theme.backgroud};
        font-family: "JosefinSans", sans-serif;
    }
`;

export const StyledGlobal = createGlobalStyle`${globalStylesCss};` as any;