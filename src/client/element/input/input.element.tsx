import { useState } from "react"
import { useActions } from "src/client/providers/state/state.hooks";
import {
    StyledInputWrapp,
    StyledInput,
} from "./input.styled";

export const Input = () => {
    const [ value, setValue ] = useState("");
    const { addTodoItem } = useActions();

    const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        const idItem = () => {
            const text = value.split(' ')[0].toLowerCase();
            const number = (max: number, min: number) => Math.floor(Math.random() * (max - min + 1)) + min;
            return `todo/${number(10,0)}/${text}-${number(99,11)}`
        }
        addTodoItem(idItem(), value, false);
        setValue("");
    }

    return (
        <StyledInputWrapp onSubmit={onSubmitForm}>
            <StyledInput
                type="text"
                placeholder="Create a new todo..."
                value={value}
                onInput={changeText}
            />
        </StyledInputWrapp>
    )
}