import React from 'react'
import { useState, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {LoginContainerStyled, FormContainer} from '../components/styles/LoginContainerStyled'

import { ReactComponent as Logo } from '../images/assets/logo.svg'

import { AuthContext } from '../components/store/auth-context';



export default function Login() {

    const ctx = useContext(AuthContext)

    const [loginOrSignup, setLoginOrSignup] = useState('login');

    const emailRef = useRef();
    const passwordRef = useRef();

    const history = useHistory();


    function setLoginOrSignupHandler() {
        if(loginOrSignup == 'login') {
            setLoginOrSignup('signup');
        }

        if(loginOrSignup == 'signup') {
            setLoginOrSignup('login');
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        let url;

        // If user is trying to login
        if(loginOrSignup == 'login') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCpRtHyiDISxBKNzPxALWMtzLAIK9aWc8w'
        } 
        // If user is trying to signup
        else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCpRtHyiDISxBKNzPxALWMtzLAIK9aWc8w'
        }
  
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true
            })
        }).then((res) => {
            if(res.ok) {
                return res.json();
            } else {
                return res.json().then(() => {
                throw new Error()
            })
        }
        }).then((data) => {
            ctx.login(data.idToken);
            toast.success('Logged in!')
            history.replace('/')
        }).catch((err) => {
            console.log(err)
            toast.error('Login failed, please try again!')
        })
    }

    

  return (
    <LoginContainerStyled>
        <Logo/>
        <FormContainer>
            {loginOrSignup == 'login' ? (<h1>Login</h1>) : (<h1>Sign Up</h1>)}
            <form onSubmit={submitHandler}>
                <input required type="email" ref={emailRef} placeholder='Email Address'></input>
                <input required type="password" ref={passwordRef} placeholder='Password'></input>
                <button type='submit'>{loginOrSignup == 'login' ? ('Log in to your account') : ('Create an Account')}</button>
                <div>{loginOrSignup == 'login' ? (<span>Don't have an account?</span>) : (<span>Already have an account?</span>)} {loginOrSignup == 'login' ? (<a onClick={setLoginOrSignupHandler}>Sign up</a>) : (<a onClick={setLoginOrSignupHandler}>Login</a>)}</div>
            </form>
        </FormContainer>
    </LoginContainerStyled>
  )
}
