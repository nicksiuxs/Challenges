import React, { useReducer } from 'react'
import { TodoReducer } from './todoReducers';

const initialState = [
    {
        id: new Date().getTime(),
        description: "Hacer los challenges",
        done: true
    }
];

const useTodos = () => {
    const [todos, dispatchTodos] = useReducer(TodoReducer, initialState)

    const handleAddTodo = (todo) => {
        dispatchTodos({ type: "ADD", payload: todo })
    }

    const handleDeleteTodo = (id) => {
        dispatchTodos({ type: "DELETE", payload: id })
    }

    const countTodos = () => {
        return todos.length
    }

    const countPendingTodos = () => {
        return todos.filter(todo => todo.done === false).length;
    }

    return {
        todos, handleAddTodo, handleDeleteTodo, countTodos, countPendingTodos
    }
}

export default useTodos