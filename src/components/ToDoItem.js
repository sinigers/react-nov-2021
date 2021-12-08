import { useEffect } from "react";

export default function ToDoItem({
    id,
    text,
    onDelete
}) {
    useEffect(() => {
        console.log(`${id} - Mounted`);
        return () =>{

        }
    }, []);

    return (
       <li>{text} <button onClick={() => onDelete(id)}>x</button> </li>
    //    <li>{text} <button onClick={onDelete}>x</button> </li>
    );
};