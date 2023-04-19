import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavComponent from './NavComponent';

const NavigationApp = () => {
    return (
        <BrowserRouter>
            <NavComponent />
            <Routes>
                <Route path='/' element={<><h1>Home</h1></>} />
                <Route path='/pages' element={<><h1>Pages</h1></>} />
                <Route path='/posts' element={<><h1>Posts</h1></>} />
            </Routes>
        </BrowserRouter>
    )
}

export default NavigationApp