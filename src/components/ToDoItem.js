// import { useEffect } from "react";
import './TodoItem.css'

export default function TodoItem({
    todo,
    onDelete,
    onClick
}) {
    // useEffect(() => {
    //     console.log(`${id} - Mounted`);
    //     return () =>{

    //     }
    // }, []);

    return (
       <li onClick={() => onClick(todo.id)} className={todo.isDone ? 'todo-item-done' : ''}>
           {todo.text}
           <button onClick={() => onDelete(todo.id)}>x</button> </li>
    //    <li>{text} <button onClick={onDelete}>x</button> </li>
    );
};