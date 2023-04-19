import React from 'react';
import { NavLink } from "react-router-dom"

import "./NavComponent.css"

const NavComponent = () => {
    return (
        <div className='navigation'>
            <NavLink className={(args) => ` ${args.isActive ? "active" : ""}`} to="/" >Home</NavLink>
            <NavLink className={(args) => ` ${args.isActive ? "active" : ""}`} to="/pages" >Pages</NavLink>
            <NavLink className={(args) => ` ${args.isActive ? "active" : ""}`} to="/posts" >Posts</NavLink>
        </div>
    )
}

export default NavComponent