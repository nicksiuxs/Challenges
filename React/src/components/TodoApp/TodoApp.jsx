
import React from 'react'

import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import useTodos from './useTodos';

const TodoApp = () => {

    const { todos, handleAddTodo, handleDeleteTodo, countTodos, countPendingTodos } = useTodos();

    return (
        <>
            <h1>TodoApp: {countTodos()}, <small>Pendiente: {countPendingTodos()}</small></h1>
            <hr />
            <div>
                <TodoAdd onNewTodo={handleAddTodo} />
                <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
            </div>
        </>
    )
}

export default TodoApp