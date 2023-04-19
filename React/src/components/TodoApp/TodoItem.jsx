import React from 'react'
import "./TodoItem.css"

const TodoItem = ({ todo, deleteTodo }) => {

    const handleOnClick = () => {
        deleteTodo(todo.id)
    }

    return (
        <li>
            <span className={`${todo.done ? 'done' : ''}`}>{todo.description}</span>
            <button onClick={handleOnClick}>Borrar</button>
        </li>
    )
}

export default TodoItem