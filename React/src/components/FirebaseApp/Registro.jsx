import React from 'react';
import { useDispatch, Provider } from "react-redux";
import { useForm } from "./useForm";
import { registerAuth, loginAuth, logoutAuth, loginAuthGoogle } from "./slices/auth/thunks"
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { logout, register } from './slices/auth/AuthSlice';
import store from './store/store';

export const RegistroApp = () => {

    return (
        <Provider store={store}>
            <Registro />
        </Provider>
    )
}

const Registro = () => {
    const dispatch = useDispatch();

    const { email, password, onInputChange, formState } = useForm({ email: "nicolas.londono@uao.edu.co", password: "12345" })

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        dispatch(registerAuth(email, password))
    }

    const onSubmitLogin = (event) => {
        event.preventDefault()
        console.log(formState)
        dispatch(loginAuth(email, password))
    }

    const handleLogOut = () => {
        dispatch(logoutAuth())
    }

    const handleLoginGoogle = () => {
        dispatch(loginAuthGoogle())
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (!user) {
                return dispatch(logout())
            }
            dispatch(register({ email: user.email }))
        })
    }, [])


    return (
        <>
            <h1>Registro</h1>
            <hr />
            <button onClick={handleLoginGoogle}>Login google</button>
            <form onSubmit={onSubmit}>
                <input type="email" name='email' onChange={onInputChange} value={email} />
                <input type="password" name='password' onChange={onInputChange} value={password} />
                <button type='submit'>Registro</button>
            </form>
            <form onSubmit={onSubmitLogin}>
                <input type="email" name='email' onChange={onInputChange} value={email} />
                <input type="password" name='password' onChange={onInputChange} value={password} />
                <button type='submit'>Iniciar sesión</button>
            </form>
            <button onClick={handleLogOut}>Logout</button>
        </>
    )
}

export default Registro