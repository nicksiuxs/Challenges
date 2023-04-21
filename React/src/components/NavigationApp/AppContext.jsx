import { createContext, useReducer } from "react";

import { appReducer, appInitialState, TYPES } from "./appReducer";

//Create context app
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, appInitialState)

    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export { AppContext };
export default AppProvider;