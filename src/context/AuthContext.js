import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {

        default:
            return state
    }
}

export const AuthContextProvider = ({Children}) => {
    
    const [state,dispatch] = useReducer(authReducer, {
        user:null
    })


    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            {Children}
        </AuthContext.Provider>
    )
}