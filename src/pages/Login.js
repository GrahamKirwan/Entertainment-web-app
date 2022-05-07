import React from 'react'
import { useState } from 'react'

import {LoginContainerStyled, FormContainer} from '../components/styles/LoginContainerStyled'

import { ReactComponent as Logo } from '../images/assets/logo.svg'


export default function Login() {

    const [loginOrSignup, setLoginOrSignup] = useState('login');

    function setLoginOrSignupHandler() {
        if(loginOrSignup == 'login') {
            setLoginOrSignup('signup');
        }

        if(loginOrSignup == 'signup') {
            setLoginOrSignup('login');
        }
    }

    function submitHandler() {

    }

  return (
    <LoginContainerStyled>
        <Logo/>
        <FormContainer>
            {loginOrSignup == 'login' ? (<h1>Login</h1>) : (<h1>Sign Up</h1>)}
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Email Address'></input>
                <input type="password" placeholder='Password'></input>
                {loginOrSignup == 'signup' ? (<input type="password" placeholder='Repeat Password'></input>) : ''}
                <button type='submit'>{loginOrSignup == 'login' ? ('Log in to your account') : ('Create an Account')}</button>
                <div>{loginOrSignup == 'login' ? (<span>Don't have an account?</span>) : (<span>Already have an account?</span>)} {loginOrSignup == 'login' ? (<a onClick={setLoginOrSignupHandler}>Sign up</a>) : (<a onClick={setLoginOrSignupHandler}>Login</a>)}</div>
            </form>
        </FormContainer>
    </LoginContainerStyled>
  )
}
