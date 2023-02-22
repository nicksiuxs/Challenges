/**
 * - Create two news buttons handleSubstract and handleReset
 * - Implement handleSubsstract by substracting from counter
 * - Implement handleReset by setting counter as default value
 * - Use useState hook to show working buttons into the web.
 */
import React, { useState } from 'react';
import useCounter from '../../customHooks/useCounter';
import "./CounterApp.css"

const CounterApp = ({ value }) => {
    const { counter, increment, decrement, reset } = useCounter({ initialValue: value })

    return (
        <div className="main">
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <div className="buttons">
                <button onClick={decrement}>
                    -
                </button>
                <button onClick={reset}>
                    Reset
                </button>
                <button onClick={increment}>
                    +
                </button>
            </div>
        </div>
    )
}

export default CounterApp