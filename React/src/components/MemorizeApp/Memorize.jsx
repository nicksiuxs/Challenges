import React, { useState } from 'react'
import useCounter from '../../customHooks/useCounter'
import Small from './Small';

const Memorize = () => {
    const { counter, increment } = useCounter(10);
    const [first, setFirst] = useState(10)
    return (
        <>
            <h1>Memorize <Small value={counter} /></h1>
            <button onClick={() => increment()}>
                +1
            </button>
            <button onClick={() => setFirst(20)}>
                +1
            </button>
        </>
    )
}

export default Memorize