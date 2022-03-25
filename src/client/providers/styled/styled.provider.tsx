import React from "react";
import { StyleSheetManager } from "styled-components";
import {
    ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { useTheme } from "../theme/theme.hooks";
import { ThemePropsType } from "../theme/theme.constants";
import { StyledGlobal } from "./styled.styled";

declare module "styled-components" {
    export interface DefaultTheme extends ThemePropsType {}
}

const StyledProvider: React.FC = ({ children }) => {
    const { themeProps } = useTheme();
    return (
        <StyleSheetManager>
            <StyledThemeProvider theme={themeProps}>
                <>
                    <StyledGlobal/>
                    {children}
                </>
            </StyledThemeProvider>
        </StyleSheetManager>
    );
}

export default StyledProvider;