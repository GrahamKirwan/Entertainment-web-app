import styled from "styled-components";

export const ContainerStyled = styled.div`
    margin: 2.5rem;
    height: calc(100vh - 5rem);

    display: grid;
    grid-template-columns: 1fr 16fr;
    grid-gap: 2.5rem;


    /* @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
        margin-top: 30px
    } */
`