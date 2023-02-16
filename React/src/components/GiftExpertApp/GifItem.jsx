import React from 'react'

const GifItem = ({ gif }) => {
    const { title, url } = gif;
    return (
        <div className="gif">
            <h3>{title}</h3>
            <img src={url} />
        </div>
    )
}

export default GifItem