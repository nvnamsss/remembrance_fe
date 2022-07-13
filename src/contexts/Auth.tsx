import React, { useState } from "react";
import { AuthenticationData, AuthProviderData } from "../dtos/Auth";

const AuthContext = React.createContext<AuthProviderData>(new AuthProviderData(new AuthenticationData(), undefined));

export const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = useState(new AuthenticationData());

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;