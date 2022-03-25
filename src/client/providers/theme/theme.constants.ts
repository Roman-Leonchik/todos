import defaultTheme from "./themes/default.theme";
import darkTheme from "./themes/dark.theme";

export enum ThemeVariant {
    Default = "default",
    Dark = "dark",
}

export const ThemesProps: Record<ThemeVariant, typeof defaultTheme> = {
    [ThemeVariant.Default]: defaultTheme,
    [ThemeVariant.Dark]: darkTheme,
};

export type ThemePropsType = typeof ThemesProps[keyof typeof ThemesProps];
