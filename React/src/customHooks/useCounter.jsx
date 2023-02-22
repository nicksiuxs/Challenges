/**
 * 1. Create a new customHook called useCounter
 * 2. Implement followed methods to handle counter:
 *  - Increment
 *  - Decrement
 *  - Reset
 * 3. Use above hook into your current component
 */

import { useState } from 'react'

const useCounter = ({ initialValue = 0 }) => {

    const [counter, setCounter] = useState(initialValue);

    /**
     * Function to increment counter
     */
    const incrementCounter = () => {
        setCounter(counter => counter + 1);
    }

    /**
     * Function to decrement counter
     */
    const decrementCounter = () => {
        setCounter(counter => counter - 1);
    }

    const resetCounter = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment: incrementCounter,
        decrement: decrementCounter,
        reset: resetCounter,
    }
}

export default useCounter