import React from 'react';
import { NavLink, useNavigate } from "react-router-dom"

import "./NavComponent.css"
import useAppContext from './useAppContext';
import { TYPES } from './appReducer';

const NavComponent = () => {
    const { dispatch } = useAppContext()

    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch({ type: TYPES.LOGIN })
        navigate("/user")
    }

    const handleLogout = () => {
        dispatch({ type: TYPES.LOGOUT })
    }
    return (
        <>
            <div className='navigation'>
                <NavLink className={(args) => ` ${args.isActive ? "active" : ""}`} to="/" >Home</NavLink>
                <NavLink className={(args) => ` ${args.isActive ? "active" : ""}`} to="/pages" >Pages</NavLink>
                <NavLink className={(args) => ` ${args.isActive ? "active" : ""}`} to="/posts" >Posts</NavLink>
            </div>
            <div>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}

export default NavComponent