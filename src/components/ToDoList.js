// import { useState, useEffect } from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import uniqid from "uniqid";

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id:'kwxjsh0f', text: 'First task', isDone: false},
        {id:'kwxjtea7', text: 'Second task', isDone: false},
        {id:'kwxjtwu3', text: 'Third task', isDone: false},
    ]);


    // useEffect(() => {}, []); 

    const onTodoInputBlur = (e) => {
        let todo= {
            id: uniqid(),
            text: e.target.value,
            isDone: false
        };

    setTodos(oldTodos => [
        ...oldTodos,
        todo
    ]);
    e.target.value="";
};


    const deleteTodoItemClickHandler = (id) => {
            setTodos(oldTodos => oldTodos.filter(todo => todo.id !== id));
    }

    const toggleTodoItemClickHandler = (id) => {
        setTodos(oldTodos => {
            let selectedTodo = oldTodos.find(x => x.id === id);
            let toggledTodo = { ...selectedTodo, isDone: !selectedTodo.isDone};
            let restTodos = oldTodos.filter(x => x.id !== id);

            return [ ...restTodos, toggledTodo];
        });
}

    return (
    <>
        <label htmlFor="todo-name">Add Todo</label>
        <input type="text" id="todo-name" onBlur={onTodoInputBlur} name="todo"/>
        <ul>
            {todos.map(todo =>
                <TodoItem 
                 key={todo.id} 
                 todo={todo}
                 onDelete={deleteTodoItemClickHandler}
                 onClick={toggleTodoItemClickHandler}
                />
            )}
            {/* {todos.map(todo => <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={() => deleteTodoItemClickHandler(todo.id)}/>)} */}
        </ul>
    </>
    );
};