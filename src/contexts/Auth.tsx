import React, { useContext, useReducer, useState } from "react";
import { AuthenticationData, AuthProviderData } from "../dtos/Auth";

export interface AuthProps {
    data: any, 
    setState: any
}

export const AuthContext = React.createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider: React.FC<AuthProps> = ({data, setState, children }: any) => {
    const [auth, setAuth] = useState(data);
    console.log("init state: ", auth);
    const updateAuth = (authData: AuthenticationData) => {
        console.log('before update authData', authData);
        setAuth({ ...auth, ...authData });
        setState(authData);
        console.log('after update authData', auth);
    };

    // console.log('auth provider', auth)
    return (
        <>
            <AuthContext.Provider value={{ auth: auth, updateAuth: updateAuth }}>
                {children}
            </AuthContext.Provider>
        </>

    )
}