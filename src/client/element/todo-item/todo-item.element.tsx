import {
    StyledTodoItem,
    StyledButtonCheck,
    StyledItemText,
    StyledButtonDelete,
} from "./todo-item.styled";

interface IProps {
    checked?: boolean;
    id?: string;
    onChecked: () => void;
    onDeleted: () => void;
}

export const TodoItem: React.FC<IProps> = ({children, id, onChecked, onDeleted, checked = false}) => {
    return(
        <StyledTodoItem checked={checked} id={id}>
            <StyledButtonCheck checked={checked} onClick={onChecked}/>
            <StyledItemText>{children}</StyledItemText>
            <StyledButtonDelete onClick={onDeleted}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                    <path fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
                </svg>
            </StyledButtonDelete>
        </StyledTodoItem>
    )
}