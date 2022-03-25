import React from "react";
import { CookiesProvider } from "react-cookie";
import ThemeProvider from "../theme/theme.provider";
import StyledProvider from "src/client/providers/styled/styled.provider";
import StateProvider from "../state/state.provider";

const CompositeProvider: React.FC = ({ children }) => {
    return(
        <CookiesProvider>
            <StateProvider>
                <ThemeProvider>
                    <StyledProvider>
                        {children}
                    </StyledProvider>
                </ThemeProvider>
            </StateProvider>
        </CookiesProvider>
    )
}

export default CompositeProvider;