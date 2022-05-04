import styled from "styled-components";

export const ContainerStyled = styled.div`
    margin: 2.5rem;
    height: calc(100vh - 5rem);

    display: grid;
    grid-template-columns: 1fr 16fr;
    grid-gap: 2.5rem;


    @media screen and (max-width: 950px) {
        display: block;
        margin: 1.5rem;
    }

    @media screen and (max-width: 615px) {
        margin: 0;
    }
`

export const MainStyled = styled.main`
    margin-left: 8.9rem;
    width: calc(100vw - 5rem - 8.9rem);

    @media screen and (max-width: 950px) {
        margin-left: 0;
        padding-top: 7.5rem;
        width: inherit;
    }

    @media screen and (max-width: 615px) {
        padding-top: 5.5rem;
    }
`