import React, { useState } from 'react'
import useFetch from '../../customHooks/useFetch'
import MultipleCustomHooks from './MultipleCustomHooks';

const QuotesApp = () => {

    const [url, setUrl] = useState('https://api.breakingbadquotes.xyz/v1/quotes/1');
    const { data, isLoading, hasError } = useFetch(url)

    const onChangeCounter = (counter) => {
        setUrl('https://api.breakingbadquotes.xyz/v1/quotes/' + counter)
    }
    return (
        <>
            {
                isLoading ? <p>Loading...</p> :
                    <div>
                        {
                            data.map((quote, index) => {
                                return (<blockquote key={index}>
                                    <p>{quote.quote}</p>
                                    <footer>{quote?.author}</footer>
                                </blockquote>)
                            })
                        }
                    </div>
            }
            <MultipleCustomHooks onChangeCounter={onChangeCounter} />
        </>
    )
}

export default QuotesApp