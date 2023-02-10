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
    title: "Título por defecto",
    sum: 10
}

export default FirstApp