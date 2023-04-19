import React from 'react'

const TodoItem = ({ todo }) => {
    return (
        <li>
            <span>{todo.description}</span>
            <button>Borrar</button>
        </li>
    )
}

export default TodoItem