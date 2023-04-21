import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavComponent from './NavComponent';
import AppProvider from './AppContext';
import useAppContext from './useAppContext';

const NavigationApp = () => {

    return (
        <BrowserRouter>
            <AppProvider>
                <AppRoutes />
            </AppProvider>
        </BrowserRouter>
    )
}

const AppRoutes = () => {
    return (
        <>
            <NavComponent />
            <Routes>
                <Route path='/' element={<><h1>Home</h1></>} />
                <Route path='/pages' element={<><h1>Pages</h1></>} />
                <Route path='/posts' element={<><h1>Posts</h1></>} />
                <Route path='/user' element={
                    <PrivateRoutes>
                        <div>
                            Usuario Logeado
                        </div>
                    </PrivateRoutes>
                } />
            </Routes>
        </>
    )
}


const PrivateRoutes = ({ children }) => {
    const { state: logged } = useAppContext();
    return logged.logged ? children : <div>No estás loggeado</div>
}


export default NavigationApp