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
            <input type="text" placeholder='Agregar' onChange={onInputChange} value={inputValue} />
        </form>
    )
}

export default AddCategory