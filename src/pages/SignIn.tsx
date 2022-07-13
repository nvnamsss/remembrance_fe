import React, { ReactElement, useState, useEffect } from 'react';

function SignIn(): ReactElement {
    return (
        <>
            <div className='application-main'>
                <div className='auth-form px-3'>
                    <div className='auth-form-header'>
                        <h1 className='text-align-center'>Sign in to Remembrance</h1>
                    </div>
                    <div className='auth-form-body mt-3'>
                        <form acceptCharset='UTF-8' action='/sign-up' method='post'>
                            <input type='hidden'></input>
                            <label>Username</label>
                            <input type='text' name='login' className='form-control input-block js-login-field'>

                            </input>
                            <div className='position-relative'>
                                <label>Password</label>
                                <input type='text' name='password' className='form-control input-block js-login-field'></input>
                                <input type='submit' name='commit' value='Sign in' className='btn btn-primary btn-block js-sign-in-button'></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignIn;
