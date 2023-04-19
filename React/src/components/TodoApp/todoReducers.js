const TodoReducer = (initialState, action) => {

    switch (action.type) {
        case "ABC":
            throw new Error("action notyet implemeneted");
            break;
        case "ADD":
            return [...initialState, action.payload]
        default:
            return initialState;
    }
}

export { TodoReducer }