import React, { useState } from 'react'

const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onAddCategory(inputValue);
        setInputValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder='Escribe la palabra a buscar' onChange={onInputChange} value={inputValue} />
            <button>Buscar</button>
        </form>
    )
}

export default AddCategory