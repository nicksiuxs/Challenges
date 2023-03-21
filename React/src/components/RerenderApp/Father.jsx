import React, { useState } from 'react'
import Son from './Son';

const Father = () => {

    const list = [2, 4, 6, 8, 10];
    const [total, setTotal] = useState(0);

    const increment = (num) => {
        setTotal(total + num)
    }

    return (
        <div>
            <h1>Father</h1>
            <p>Total: {total}</p>
            <hr />
            {
                list.map((n, index) => {
                    return <Son key={index} number={n} increment={increment} />
                })
            }
        </div>
    )
}

export default Father