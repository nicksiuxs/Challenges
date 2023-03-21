import React, { memo } from 'react'

const Small = memo(({ value }) => {
    console.log(":(")
    return (
        <small>{value}</small>
    )
})

export default Small