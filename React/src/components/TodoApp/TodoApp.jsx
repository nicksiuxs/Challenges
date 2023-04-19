
import React, { useReducer } from 'react'
import { TodoReducer } from './todoReducers';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const initialState = [
    {
        id: new Date().getTime(),
        description: "Hacer los challenges",
        done: false
    }
];

const TodoApp = () => {
    const [todos, dispatchTodos] = useReducer(TodoReducer, initialState)

    const handleAddTodo = (todo) => {
        dispatchTodos({ type: "ADD", payload: todo })
    }

    return (
        <>
            <h1>TodoApp: {todos.length}, <small>Pendiente: 2</small></h1>
            <hr />
            <div>
                <TodoAdd onNewTodo={handleAddTodo} />
                <TodoList todos={todos} />
            </div>
        </>
    )
}

export default TodoApp