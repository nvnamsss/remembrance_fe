import { time } from 'console';
import React, { ReactElement, useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { doLogin, useAuthDispatch, useAuthState } from '../contexts/Auth';
import { AuthenticationData } from '../dtos/Auth';
import { AuthRequest, signin } from '../services/Auth';
import jwt from 'jwt-decode' // import dependency

function SignIn(): ReactElement {
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = (location.state as any)?.from?.pathname || "/";

    const auth = useAuthState();
    const [username, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [submitted, setSubmitted] = useState(0);

    useEffect(() => {
        if (auth["user"]) {
            navigate(from, {replace: false});
        }
    }, [])

    useEffect(() => {

    }, [username, pwd])

    useEffect(() => {
        if (auth["user"]) {
            navigate(from, {replace: false});
        }
    }, [submitted])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let req: AuthRequest = {
            username: username,
            password: pwd,
        }
        let res = await signin(req);
        if (res.meta.status != 200) {
            return;
        }

        console.log("res", res);
        
        doLogin(dispatch, username, res.data.access_token, res.data.refresh_token, res.data.profile);
        setSubmitted(submitted + 1);
        return;

        // let res = await signin(req);
        // if (res.meta.status != 200) {
        //     setErrMsg(res.meta.message)
        //     return false;
        // }

        // // let authData: AuthenticationData = new AuthenticationData();
        // if (auth !== null) {
        //     console.log("Hi mom");

        //     // let authData = auth.auth;
        //     // authData.user = req.username;
        //     // // authData.access_token = res.data.access_token;
        //     // // authData.refresh_token = res.data.refresh_token;
        //     // authData.authorized = true;
        //     let data : AuthenticationData = new AuthenticationData(
        //             req.username,
        //             res.data.access_token,
        //             res.data.refresh_token,
        //             true,
        //     )
        //     console.log("DAta", data);

        //     auth.updateAuth(data);
        //     // setApp(data);
        // }
        // console.log("navigate to:", from)
        // navigate(from, { replace: true });

        // // setUser('');
        // // setPwd('');
        // console.log("authenticate: ", res); 
    }

    return (
        <>
            <div className='application-main'>
                <div className='auth-form px-3'>
                    <div className='auth-form-header'>
                        <h1 className='text-align-center'>Sign in to Remembrance</h1>
                    </div>
                    <div className='auth-form-body mt-3'>
                        <form acceptCharset='UTF-8' action='/sign-up' method='post' onSubmit={handleSubmit}>
                            <input type='hidden'></input>
                            <label>Username</label>
                            <input
                                type='text' name='login' className='form-control input-block js-login-field'
                                onChange={(e) => setUser(e.target.value)}
                                autoComplete="off"
                                value={username}
                                required>

                            </input>
                            <div className='position-relative'>
                                <label>Password</label>
                                <input
                                    type='password' name='password' className='form-control input-block js-login-field'
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required>

                                </input>
                                <input
                                    type='submit' name='commit' value='Sign in' className='btn btn-primary btn-block js-sign-in-button'
                                ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignIn;
