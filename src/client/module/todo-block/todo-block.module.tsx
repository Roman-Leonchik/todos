import { TodoList } from "../todo-list/todo-list.module";
import { useTypedSelector, useActions } from "src/client/providers/state/state.hooks";
import {
    StyledTodoBlock,
    StyledTodoFooter,
    StyledListButton,
    StyledTodoButton,
    StyledListMobileButton,
} from "./todo-block.styled";

export const TodoBlock = () => {
    const { todoList, todoActive } = useTypedSelector(state => state.todo);
    const { setTodoButton, deleteChecked } = useActions();

    const itemsLeft = todoList.filter((item) => item.checked === false);

    const listButton = [
        {
            id: "all",
            text: "All",
        },
        {
            id: "active",
            text: "Active",
        },
        {
            id: "completed",
            text: "Completed",
        }
    ];

    return (
        <>
            <StyledTodoBlock>
                <TodoList />
                <StyledTodoFooter>
                    <div>{itemsLeft.length} items left</div>
                    <StyledListButton>
                        {
                            listButton.map((item) =>(
                                <StyledTodoButton
                                    key={item.id}
                                    active={todoActive === item.id && true}
                                    onClick={() => setTodoButton(item.id)}
                                >
                                    {item.text}
                                </StyledTodoButton>
                            ))
                        }
                    </StyledListButton>
                    <StyledTodoButton onClick={() => deleteChecked()}>Clear Completed</StyledTodoButton>
                </StyledTodoFooter>
            </StyledTodoBlock>
            <StyledListMobileButton>
                {
                    listButton.map((item) =>(
                        <StyledTodoButton
                            key={item.id}
                            active={todoActive === item.id && true}
                            onClick={() => setTodoButton(item.id)}
                        >
                            {item.text}
                        </StyledTodoButton>
                    ))
                }
            </StyledListMobileButton>
        </>
    )
}