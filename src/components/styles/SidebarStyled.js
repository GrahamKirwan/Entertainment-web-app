import styled from "styled-components";

export const SidebarStyled = styled.div`
    height: 100%;
    width: 7rem;
    background-color: #171E31;
    border-radius: 25px;
    position: relative;

`

export const SidebarNavContainerStyled = styled.div`
    height: 100%;
    width: 100%;
    margin-top: 3rem;
    display: flex;
    align-items: center;
    flex-direction: column;

`

export const NavStyled = styled.ul`
    list-style: none;
    padding: 0;
    padding-top: 3rem;

    & li {
        padding-top: 3rem;
        cursor: pointer;
        
    }

    & li a:hover > svg path {
        fill: #FD4746;
        transition: all .3s;
    }

`

export const UserStyled = styled.div`
    position: absolute;
    bottom: 3rem;
    cursor: pointer;

    img {
        border-radius: 50%;
        width: 3rem;
        border: 1px solid white;
    }
`