/**
 * Challenge 04
 * - Add a new input tag to write some text, use onChange event to get changes on input
 * - Handle above input with useState hook to setCategory
 * - Send event variable to setCategory function to get value from input
 * - Add a new Button to add categories
 * - Use useState hook to addCategories to the list with onClick event button.
 * - Inside above item, call setCategory to clear input field after add one category
 */
import React, { useState } from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';
import "./GifExpertApp.css";

const ListApp = () => {

    const [categories, setCategories] = useState([]);

    /**
     * Function to add a category in the array of categories
     * @param {*} event 
     */
    const onAddCategory = (category) => {
        if (category != "") {
            setCategories([...categories, category]);
        }
    }

    return (
        <>
            <h1>Gift expert</h1>
            <AddCategory onAddCategory={onAddCategory} />

            <ol>
                {
                    categories.map((category, key) => {
                        return <li key={key}>
                            <GifGrid category={category} />
                        </li>
                    })
                }
            </ol>
        </>
    )
}

export default ListApp