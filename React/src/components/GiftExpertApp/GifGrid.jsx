import React from 'react';
import useFetch from '../../customHooks/useFetch';
import GifItem from './GifItem';

const mapData = (data) => {
    if (!data) {
        return null;
    }
    const gifs = data.data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    });

    return gifs;
}

const GifGrid = ({ category }) => {

    const key = "3wVMZjfTjzH4LQkopt7xDEeKQyX3PAEt";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=25&offset=0&rating=g&lang=en`;

    const response = useFetch(url)
    const { data, isLoading, hasError } = response
    const gifs = mapData(data)
    return (
        <>
            <h2>Resulados de la busqueda de: {category}</h2>
            {
                isLoading ? <h2>.....Loadding</h2> : <ul>
                    {
                        gifs.map(image => {
                            return <li key={image.id}>
                                <GifItem gif={image} />
                            </li>
                        })
                    }
                </ul>
            }

        </>
    )
}

export default GifGrid