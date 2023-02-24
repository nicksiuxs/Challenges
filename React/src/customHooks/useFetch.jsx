import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [fetchData, setFetchData] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {
        try {
            const api = await fetch(url);
            const data = await api.json();
            setFetchData({
                data,
                isLoading: false,
                hasError: null
            })
        } catch (error) {
            setFetchData({
                data: null,
                isLoading: false,
                hasError: error
            })
        }
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return {
        ...fetchData
    }
}

export default useFetch