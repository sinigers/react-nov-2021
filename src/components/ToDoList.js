

export default function ToDoList() {
    const todos = [
        {id:1, text: 'First task'},
        {id:2, text: 'Second task'},
        {id:3, text: 'Third task'},
    ];
    
    return (
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
    );
};