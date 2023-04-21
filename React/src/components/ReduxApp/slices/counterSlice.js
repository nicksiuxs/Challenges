import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        incrementByValue: (state, action) => {
            state.counter += action.payload
        },
        decrementByValue: (state, action) => {
            state.counter -= action.payload
        }
    }
})

export const { increment, decrement, incrementByValue, decrementByValue } = counterSlice.actions;