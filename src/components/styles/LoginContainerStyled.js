import styled from "styled-components";

export const LoginContainerStyled = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    svg {
        transform: translateY(-4rem);
    }

    form {

    }
    
`

export const FormContainer = styled.div`
        box-sizing: border-box;
        width: 25rem;
        height: 28rem;
        margin-top: 3rem;
        transform: translateY(-2rem);
        background-color: #161D2F;
        border-radius: 2%;
        padding: 2rem;

        h1 {
            font-weight: 300;
            font-size: 2rem;
        }
`