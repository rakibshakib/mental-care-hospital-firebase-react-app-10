import React, { createContext } from 'react'
import useFireBase from '../hooks/useFireBase'

export const UseContext = createContext();
const AuthProvider = ({children}) => {
    const allContext = useFireBase();
    return (
        <UseContext.Provider value={allContext}>
            {children}
        </UseContext.Provider>
    )
}

export default AuthProvider
