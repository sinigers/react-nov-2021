import { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import uniqid from "uniqid";

export default function ToDoList() {
    const [todos, setTodos] = useState([
        {id:'kwxjsh0f', text: 'First task'},
        {id:'kwxjtea7', text: 'Second task'},
        {id:'kwxjtwu3', text: 'Third task'},
    ]);


    // useEffect(() => {}, []); 

    const onTodoInputBlur = (e) => {
        let todo= {
            id: uniqid(),
            text: e.target.value
        };

    setTodos(oldTodos => [
        ...oldTodos,
        todo
    ]);
    e.target.value="";
};


    const deleteTodoItemClickHandler = (id) => {
setTodos(oldTodos => oldTodos.filter(todo => todo.id != id));
    }

    return (
    <>
        <label htmlFor="todo-name">Add Todo</label>
        <input type="text" id="todo-name" onBlur={onTodoInputBlur} name="todo"/>
        <ul>
            {todos.map(todo => <ToDoItem key={todo.id} id={todo.id} text={todo.text} onDelete={deleteTodoItemClickHandler}/>)}
            {/* {todos.map(todo => <ToDoItem key={todo.id} id={todo.id} text={todo.text} onDelete={() => deleteTodoItemClickHandler(todo.id)}/>)} */}
        </ul>
    </>
    );
};