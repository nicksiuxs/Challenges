import React, { useState, useEffect } from 'react';
import GifItem from './GifItem';

const getGifs = async (category) => {
    const key = "3wVMZjfTjzH4LQkopt7xDEeKQyX3PAEt";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=25&offset=0&rating=g&lang=en`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    });

    return gifs;
}

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const data = await getGifs(category);

        setImages(data);
    }

    useEffect(() => {

        getImages();

    }, [category])


    return (
        <>
            <h2>Resulados de la busqueda de: {category}</h2>

            <ul>
                {
                    images.map(image => {
                        return <li key={image.id}>
                            <GifItem gif={image} />
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default GifGrid