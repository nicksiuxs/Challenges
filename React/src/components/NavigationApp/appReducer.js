const TYPES = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT"
}

const appInitialState = {
    logged: false
}

const appReducer = (state, action) => {
    switch (action.type) {
        case TYPES.LOGIN:
            return { logged: true };
        case TYPES.LOGOUT:
            return appInitialState;
        default:
            return state;
    }
}

export { appInitialState, appReducer, TYPES }