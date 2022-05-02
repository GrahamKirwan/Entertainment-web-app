import styled from "styled-components";

export const SidebarStyled = styled.div`
    height: 100%;
    width: 7rem;
    background-color: #171E31;
    border-radius: 25px;

`

export const SidebarNavContainerStyled = styled.div`
    height: 100%;
    width: 100%;
    /* border: 1px solid red; */
    margin-top: 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;

`

export const NavStyled = styled.ul`
    list-style: none;
    padding: 0;
    padding-top: 5rem;

    & li {
        padding-top: 3rem;
    }
`