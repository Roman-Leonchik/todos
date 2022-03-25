import { useTheme } from "src/client/providers/theme/theme.hooks";
import { ThemeVariant } from "src/client/providers/theme/theme.constants";
import {
    StyledHeader,
    StyledHeaderTitle,
    StyledHeaderButton,
} from "./header.styled";

export const Header = () => {
    const { themeVariant, setThemeVariant } = useTheme();

    const changeTheme = () => {
        setThemeVariant(themeVariant === "default" ? ThemeVariant.Dark : ThemeVariant.Default);
    }

    return (
        <StyledHeader>
            <StyledHeaderTitle>Todo</StyledHeaderTitle>
            <StyledHeaderButton onClick={changeTheme}>
                <img src={`./svg/icon-${themeVariant === "dark" ? "sun" : "moon"}.svg`} alt="" />
            </StyledHeaderButton>
        </StyledHeader>
    )
}