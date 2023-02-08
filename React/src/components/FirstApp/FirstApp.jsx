import React from 'react';
import { number, string } from "prop-types";

const FirstApp = ({ title, sum }) => {
    return (
        <>
            <h1>{title}</h1>
            <span>{sum}</span>
        </>
    )
}

FirstApp.propTypes = {
    title: string.isRequired,
    sum: number.isRequired
}

FirstApp.defaultProps = {
    title: "No hay título",
    sum: 20
}

export default FirstApp