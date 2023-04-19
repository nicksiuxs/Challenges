const TodoReducer = (initialState, action) => {

    switch (action.type) {
        case "ABC":
            throw new Error("action notyet implemeneted");
            break;
        case "ADD":
            return [...initialState, action.payload]
        case "DELETE":
            const newState = initialState.filter(todo => todo.id !== action.payload)
            return newState
        default:
            return initialState;
    }
}

export { TodoReducer }