import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null
}
export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        register: (state, action) => {
            state.email = action.payload.email
        },
        logout: (state, action) => {
            state = initialState;
        },
        login: (state, action) => {
            console.log(action)
            state.email = action.payload.email
            state.uid = action.payload.uid
            state.status = "logged"
            state.displayName = action.payload.displayName
            state.photoUrl = action.payload.photoUrl
        },
        loginGoogle: (state, action) => {
            console.log(action)
        },
        checkingCredentials: (state, action) => {
            console.log("checking")
        }
    }
});

export const { register, login, logout, checkingCredentials } = authSlice.actions