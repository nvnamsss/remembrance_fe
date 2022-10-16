import React, { useContext, useReducer, useState } from "react";
import { AuthenticationData, AuthProviderData } from "../dtos/Auth";
import { AuthRequest, ProfileData, signin } from '../services/Auth';

export interface Data {
    status: string,
    user: null | string,
    user_id: number,
    access_token: string,
    refresh_token: string
    profile: ProfileData
}


const initialState = {
    status: "idle",
    user: null,
    error: null
};

const AuthStateContext = React.createContext({});
const AuthDispatchContext = React.createContext({});

function reducer(currentState, newState) {
    return { ...currentState, ...newState };
}

function useAuthState() {
    const context = React.useContext(AuthStateContext);
    if (!context) throw new Error("useAuthState must be used in AuthProvider");

    return context;
}

function useAuthDispatch() {
    const context = React.useContext(AuthDispatchContext);
    if (!context) throw new Error("useAuthDispatch must be used in AuthProvider");

    return context;
}



function AuthProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {props.children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}

function doLogin(dispatch, user, access_token, refresh_token, profile: ProfileData) {
    try {
        dispatch({ status: "pending" });

        // const result = await signin({
        //     username: user,
        //     password: password,
        // });
        dispatch({
            status: "resolved",
            user: user,
            access_token: access_token,
            refresh_token: refresh_token,
            profile: profile,
            error: null
        });
    } catch (error) {
        dispatch({ status: "rejected", error });
    }
}

function doLogout(dispatch) {
    dispatch(initialState);
}

export { AuthProvider, useAuthState, useAuthDispatch, doLogin, doLogout };


// export interface AuthProps {
//     data: any, 
//     setState: any
// }

// export const AuthContext = React.createContext<AuthProviderData>({} as AuthProviderData);

// export const AuthProvider: React.FC<AuthProps> = ({data, setState, children }: any) => {
//     const [auth, setAuth] = useState(data);
//     console.log("init state: ", auth);
//     const updateAuth = (authData: AuthenticationData) => {
//         console.log('before update authData', authData);
//         setAuth({ ...auth, ...authData });
//         setState(authData);
//         console.log('after update authData', auth);
//     };

//     // console.log('auth provider', auth)
//     return (
//         <>
//             <AuthContext.Provider value={{ auth: auth, updateAuth: updateAuth }}>
//                 {children}
//             </AuthContext.Provider>
//         </>

//     )
// }