import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
    const [todos, setTodos] = useState([
        {id:1, text: 'First task'},
        {id:2, text: 'Second task'},
        {id:3, text: 'Third task'},
    ]);


    // useEffect(() => {}, []); 

    const onTodoInputBlur = (e) => {
        let todo= {
            id: todos.lenght+1,
            text: e.target.value
        };

    setTodos(oldTodos => [
        ...oldTodos,
        todo
    ]);
    e.target.value="";
};

    return (
    <>
        <label htmlFor="todo-name">Add Todo</label>
        <input type="text" id="todo-name" onBlur={onTodoInputBlur} name="todo"/>
        <ul>
            {todos.map(todo => <ToDoItem key={todo.id} text={todo.text} />)}
        </ul>
    </>
    );
};