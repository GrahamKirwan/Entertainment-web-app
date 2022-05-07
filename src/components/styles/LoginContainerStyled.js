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
        height: calc(100% - 4rem);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        input {
            width: 100%;
            background: none;
            border-top: none;
            border-right: none;
            border-left: none;
            border-image: initial;
            color: rgb(255, 255, 255);
            border-bottom: 1px solid rgb(90, 105, 143);
            height: 37px;
            font-size: 15px;
            margin-bottom: 1.5rem;
            padding: 0px 1rem;
            outline: none;
            caret-color: rgb(252, 71, 71);
            box-sizing: border-box;

            ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: rgb(90, 105, 143);
                opacity: 1; /* Firefox */
            }
        }

        button {
            width: 100%;
            height: 3rem;
            background: rgb(252, 71, 71);
            color: rgb(255, 255, 255);
            border-radius: 6px;
            font-size: 15px;
            transition: all 0.3s ease 0s;
            margin-bottom: 1.5rem;
            border: none;
            outline: none;
            cursor: pointer;
        }

        div {
            a {
                color: rgb(252, 71, 71);
                cursor: pointer;
            }
        }
    }
    
`

export const FormContainer = styled.div`
        box-sizing: border-box;
        width: 25rem;
        height: 28rem;
        margin-top: 3rem;
        transform: translateY(-2rem);
        background-color: #161D2F;
        border-radius: 3%;
        padding: 2rem;

        h1 {
            font-weight: 500;
            font-size: 2rem;
            margin: 0;
            margin-bottom: 2rem;
        }
`