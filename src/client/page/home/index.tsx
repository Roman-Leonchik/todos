import { useTheme } from "src/client/providers/theme/theme.hooks";
import { Header } from "src/client/module/header/header.module";
import { Footer } from "src/client/module/footer/footer.module";
import { Input } from "src/client/element/input/input.element";
import { TodoBlock } from "src/client/module/todo-block/todo-block.module";
import {
    StyledHome,
    StyledHomeContainer,
    StyleHomeBackground,
} from "./styled";

export const HomePage = () => {
    const { themeVariant } = useTheme();

    return(
        <StyledHome>
            <StyleHomeBackground themeVariant={themeVariant}/>
            <StyledHomeContainer>
                <Header />
                <Input/>
                <TodoBlock />
                <Footer />
            </StyledHomeContainer>
        </StyledHome>
    )
}