/**
 * - Create two news buttons handleSubstract and handleReset
 * - Implement handleSubsstract by substracting from counter
 * - Implement handleReset by setting counter as default value
 * - Use useState hook to show working buttons into the web.
 */
import React, { useState } from 'react';
import "./CounterApp.css"

const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    /**
     * Function to add one to the counter
     */
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    /**
     * Function to subsstract one to the counter
     */
    const handleSubsstract = () => {
        setCounter(counter - 1);
    }

    /**
     * Function to reset de counter
     */
    const handleReset = () => {
        setCounter(value);
    }

    return (
        <div className="main">
            <h1>Counter</h1>
            <h2>{counter}</h2>
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