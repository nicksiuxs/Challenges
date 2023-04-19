import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos = [], deleteTodo }) => {
    return (
        <ul>
            {
                todos.map(((todo, key) => <TodoItem key={key} todo={todo} deleteTodo={deleteTodo} />))
            }
        </ul>
    )
}

export default TodoList