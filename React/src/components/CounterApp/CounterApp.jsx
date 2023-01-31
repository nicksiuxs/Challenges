import React, { useState } from 'react'

const CounterApp = () => {
    const defaultValue = 0;
    const [counter, setCounter] = useState(defaultValue);

    const handleSubsstract = () => {
        setCounter(counter => counter - 1);
    }

    const handleReset = () => {
        setCounter(defaultValue);
    }

    const handleAdd = () => {
        setCounter(counter => counter + 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleSubsstract}>
                Subsstract
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
            <button onClick={handleAdd}>
                Add
            </button>
        </div>
    )
}

export default CounterApp