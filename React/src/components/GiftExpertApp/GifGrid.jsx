import React, { useEffect } from 'react';

const getGifs = async (category) => {
    const key = "";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=25&offset=0&rating=g&lang=en`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.img,
            url: gif.images.d
        }
    });

    return gifs;
}

const GifGrid = ({ category }) => {

    // console.log(
    getGifs(category)
    // );

    return (
        <>
            <h3>{category}</h3>
            <p>Hello world</p>
        </>
    )
}

export default GifGrid