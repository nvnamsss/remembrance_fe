import { off } from 'process';
import React, { ReactElement, useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthenticationData } from '../dtos/Auth';
import useAuth from '../hooks/Auth';
import { AuthRequest, signin } from '../services/Auth';

function SignIn(): ReactElement {
    const auth = useAuth();
    // const {app, setApp} = useApp();
    console.log("auth from signin", auth)
    const navigate = useNavigate();
    const location = useLocation();
    const from = (location.state as any)?.from?.pathname || "/";


    // const userRef = useRef();
    // const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        // userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let req: AuthRequest = {
            username: user,
            password: pwd,
        }
        let res = await signin(req);
        if (res.meta.status != 200) {
            setErrMsg(res.meta.message)
            return false;
        }
        
        // let authData: AuthenticationData = new AuthenticationData();
        if (auth !== null) {
            console.log("Hi mom");
            
            // let authData = auth.auth;
            // authData.user = req.username;
            // // authData.access_token = res.data.access_token;
            // // authData.refresh_token = res.data.refresh_token;
            // authData.authorized = true;
            let data : AuthenticationData = new AuthenticationData(
                    req.username,
                    res.data.access_token,
                    res.data.refresh_token,
                    true,
            )
            console.log("DAta", data);
            
            auth.updateAuth(data);
            // setApp(data);
        }
        console.log("navigate to:", from)
        navigate(from, { replace: true });

        // setUser('');
        // setPwd('');
        console.log("authenticate: ", res); 
        // async function call() : Promise<boolean>{

        //     return true
        // }
        // let result = await call();
        // if (result) {
        // }
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
                                value={user}
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
