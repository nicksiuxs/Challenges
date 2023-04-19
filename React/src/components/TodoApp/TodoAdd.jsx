import React from 'react'

const TodoAdd = ({ onNewTodo }) => {

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: new Date().getTime(),
            description: "Hacer proyecto",
            done: false
        }
        onNewTodo(newTodo)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" />
            <button type='submit'>Agregar</button>
        </form>
    )
}

export default TodoAdd