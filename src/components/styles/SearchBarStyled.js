import styled from "styled-components";

export const SearchBarStyled = styled.input`
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
    height: 3rem;
    line-height: 2rem;
    margin: 0px auto;
    font-family: Outfit, sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    background: none;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    outline: none;
    color: rgb(255, 255, 255);
    border-bottom: 1px solid transparent;

    @media screen and (max-width: 615px) {
        font-size: 1.2rem;
    }

    &:focus {
        caret-color: rgb(252, 71, 71);
        border-bottom: 1px solid rgb(90, 105, 143);
    }
`;

export const SearchBarCont = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 2rem;

    & svg {
        margin-right: 1rem;
    }

    @media screen and (max-width: 615px) {
        width: calc(100vw - 4rem);
        margin: 0 auto;
    }
`