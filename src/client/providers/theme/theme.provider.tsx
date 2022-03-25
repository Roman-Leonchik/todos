import React, { useState, useCallback, useMemo } from "react";
import { useCookies } from "react-cookie";
import { COOKIES_ENDLESS_OPTIONS, COOKIES_NAMES } from "src/client/lib/constants";
import {
    ThemeVariant,
    ThemesProps,
    ThemePropsType
} from "./theme.constants";

export interface ITheme {
    themeVariant: ThemeVariant;
    themeProps: ThemePropsType;
    setThemeVariant: (theme: ThemeVariant) => void;
}

export const ThemeContext = React.createContext<ITheme>(undefined as any);

const ThemeProvider: React.FC = ({ children }) => {
    const { themeVariant, themeProps, setThemeVariant } = useThemeState();
    
    return (
        <ThemeContext.Provider
            value={{ themeVariant, themeProps, setThemeVariant }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

const useThemeState = () => {
    const [cookies, setCookie] = useCookies([COOKIES_NAMES.theme]);
    const [themeVariant, setThemeVariantState] = useState(() => {
        const cookieTheme = cookies[COOKIES_NAMES.theme];

        return (
            Object.values(ThemeVariant).find(
                (theme) => theme === cookieTheme,
            ) || ThemeVariant.Default
        );
    });
    const themeProps = useMemo(() => ThemesProps[themeVariant], [themeVariant]);
    const setThemeVariant = useCallback(
        (newTheme: ThemeVariant) => {
            setCookie(COOKIES_NAMES.theme, newTheme, COOKIES_ENDLESS_OPTIONS);
            setThemeVariantState(newTheme);
        },
        [setCookie],
    );
    return { themeVariant, themeProps, setThemeVariant };
};