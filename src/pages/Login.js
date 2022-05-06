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
                <input type="text"></input>
            </form>
        </FormContainer>
    </LoginContainerStyled>
  )
}
