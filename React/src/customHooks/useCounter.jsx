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