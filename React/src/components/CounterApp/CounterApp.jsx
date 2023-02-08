import React, { useState } from 'react';
import "./CounterApp.css"

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
        <div className="main">
            <h1>Counter: {counter}</h1>
            <div className="buttons">
                <button onClick={handleSubsstract}>
                    -
                </button>
                <button onClick={handleReset}>
                    Reset
                </button>
                <button onClick={handleAdd}>
                    +
                </button>
            </div>
        </div>
    )
}

export default CounterApp