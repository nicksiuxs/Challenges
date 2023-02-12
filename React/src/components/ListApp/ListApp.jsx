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

const ListApp = () => {

    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);

    /**
     * Function to get input event and set the value un category state
     * @param {*} event input event
     */
    const handleOnChangeInput = (event) => {
        setCategory(event.target.value)
    }

    /**
     * Function to add a category in the array of categories
     * @param {*} event 
     */
    const addCategories = (event) => {
        if (category != "") {
            setCategories([...categories, category]);
            setCategory("")
        }
    }

    /**
     * Function to empty the categories array
     */
    const emptyCategories = () => {
        setCategories([])
    }

    return (
        <>
            <h1>List in React</h1>
            <div>
                <input type="text" onChange={handleOnChangeInput} value={category} />
                <button onClick={addCategories}>Add</button>
            </div>
            <br />
            <div>
                <button onClick={emptyCategories}>Empty categories</button>
            </div>
            {
                categories.length > 0 ? <ol>
                    {
                        categories.map((category, key) => {
                            return <li key={key}>{category}</li>
                        })
                    }
                </ol>
                    : <h3>There are no categories, add one!</h3>
            }

        </>
    )
}

export default ListApp