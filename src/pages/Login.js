import React from 'react'

import {LoginContainerStyled, FormContainer} from '../components/styles/LoginContainerStyled'

import { ReactComponent as Logo } from '../images/assets/logo.svg'


export default function Login() {
  return (
    <LoginContainerStyled>
        <Logo/>
        <FormContainer>
            <h1>Sign up</h1>
            <form>
                <input type="text" placeholder='Email Address'></input>
                <input type="password" placeholder='Password'></input>
                <input type="password" placeholder='Repeat Password'></input>
                <button type='submit'>Create an Account</button>
                <div><span>Don't have an account? </span><a>Login</a></div>
            </form>
        </FormContainer>
    </LoginContainerStyled>
  )
}
