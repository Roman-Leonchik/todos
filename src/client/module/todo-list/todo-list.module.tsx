import { TodoItem } from "src/client/element/todo-item/todo-item.element";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useTypedSelector, useActions } from "src/client/providers/state/state.hooks";

export const TodoList = () => {
    const { todoList, todoActive } = useTypedSelector(state => state.todo);
    const { toogleCheckedItem, deleteItem, changeArray } = useActions();

    const itemsLeft = todoList.filter((item) => item.checked === false);
    const itemsCheck = todoList.filter((item) => item.checked === true);

    const listVisibility = (active: string) => {
        switch(active) {
            case "active":
                return itemsLeft
            case "completed":
                return itemsCheck
            default:
                return todoList
        }
    }

    const onDragEnd = (result: DropResult) => {
		const { source, destination } = result;
		if (!destination) return
		const items = Array.from(listVisibility(todoActive))
		const [ newOrder ] = items.splice(source.index, 1);
		items.splice(destination.index, 0, newOrder);
        const newList = items.map((items, index) => {
            items.order = index
            return items
        })
		changeArray(newList)
	}

    return (
        <DragDropContext
            onDragEnd={onDragEnd}
        >
            <Droppable droppableId="block">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                    {provided.placeholder}
                    {listVisibility(todoActive).map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <TodoItem
                                        key={item.id}
                                        id={item.id}
                                        checked={item.checked}
                                        onChecked={() => toogleCheckedItem(item.id)}
                                        onDeleted={() => deleteItem(item.id)}
                                    >
                                        {item.text}
                                    </TodoItem>
                                </div>
                            )}
                        </Draggable>
                    ))}
                </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}