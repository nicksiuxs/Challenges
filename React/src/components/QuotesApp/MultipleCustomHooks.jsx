import React, { useEffect } from 'react'
import useCounter from '../../customHooks/useCounter'

const MultipleCustomHooks = ({ onChangeCounter }) => {
    const { counter, increment } = useCounter({ initialValue: 1 });

    useEffect(() => {
        onChangeCounter(counter);
    }, [counter])

    return (
        <button onClick={increment}>
            Next Quote
        </button>
    )
}

export default MultipleCustomHooks