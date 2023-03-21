import React, { memo } from 'react'

const Son = memo(({ number, increment }) => {
    console.log("again reloaded....")
    return (
        <button onClick={() => { increment(number) }}>
            {number}
        </button>
    )
}, (prevPros, nextProps) => {
    if (prevPros.number !== nextProps.prevPros) {
        return true
    }
    return false
}
)

export default Son