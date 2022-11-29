import { time } from 'console';
import React, { ReactElement, useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { doLogin, useAuthDispatch, useAuthState } from '../contexts/Auth';
import { AuthenticationData } from '../dtos/Auth';
import { AuthRequest, signin } from '../services/Auth';
import jwt from 'jwt-decode' // import dependency
import { Button, FloatingLabel, Form } from 'react-bootstrap';

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
            navigate(from, { replace: false });
        }
    }, [])

    useEffect(() => {

    }, [username, pwd])

    useEffect(() => {
        if (auth["user"]) {
            navigate(from, { replace: false });
        }
    }, [submitted])

    const handleSubmit = async (e: any) => {
        console.log('hi mom');
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
            <div className='form-outline mx-auto' style={{ width: 400 }}>
                <div className='auth-form px-3'>
                    <div className='auth-form-header'>
                        <h1 className='text-align-center'>Sign in to Remembrance</h1>
                    </div>
                    <div className='auth-form-body'>

                        <Form acceptCharset='UTF-8' action='/sign-up' method='post' onSubmit={handleSubmit}>
                            <FloatingLabel className="mb-2" controlId="floatingName" label="Username">
                                <Form.Control type="text" style={{height: 48}} placeholder="Username" value={username} onChange={(newValue) => { setUser(newValue.target.value); }} />
                            </FloatingLabel>

                            <FloatingLabel className="mb-2" controlId="floatingContent" label="Password">
                                <Form.Control type="password" style={{height: 48}} placeholder="Password" value={pwd} onChange={(newValue) => { setPwd(newValue.target.value); }} />
                            </FloatingLabel>

                            <div className='col text-center'>
                                <Button className="btn btn-primary btn-block" variant='primary' type='submit'>
                                    Login
                                </Button>
                            </div>

                            {/* <input type='hidden'></input>
                            <label>Username</label>
                            <input
                                type='text' name='login' className='form-control'
                                onChange={(e) => setUser(e.target.value)}
                                autoComplete="off"
                                value={username}
                                required>

                            </input>
                            <div className='position-relative'>
                                <label>Password</label>
                                <input
                                    type='password' name='password' className='form-control'
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required>

                                </input>
                                <input
                                    type='submit' name='commit' value='Sign in' className='btn btn-primary btn-block js-sign-in-button'
                                ></input>
                            </div> */}
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignIn;
