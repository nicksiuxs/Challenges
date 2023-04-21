import React from 'react'
import { Provider, useDispatch, useSelector } from "react-redux";
import store from './store/store';
import { increment, decrement, incrementByValue, decrementByValue } from './slices/counterSlice';

const ReduxApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

const App = () => {
    const { counter } = useSelector(state => state.counter);
    const dispatch = useDispatch()

    const handleIncrement = () => { dispatch(increment()) }
    const handelDecrement = () => { dispatch(decrement()) }

    const handleIncrementBy = () => { dispatch(incrementByValue(10)) }
    const handelDecrementBy = () => { dispatch(decrementByValue(10)) }

    return (
        <div>
            <h1>Redux App</h1>
            <p>{counter}</p>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handelDecrement}>Decrement</button>
            </div>
            <div>
                <button onClick={handleIncrementBy}>Increment +10</button>
                <button onClick={handelDecrementBy}>Decrement -10</button>
            </div>
        </div>
    )
}

export default ReduxApp