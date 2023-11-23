'use client'
import { createContext } from 'react'

type AuthContextType = {
    isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
    const isAuthenticated = false;

    const signIn = async () => {

    }
    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
};