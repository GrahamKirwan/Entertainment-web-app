import styled from "styled-components";

export const SidebarStyled = styled.div`
  height: calc(100vh - 5rem);
  width: 6.4rem;
  background-color: #171e31;
  border-radius: 25px;
  position: fixed;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    width: calc(100% - 3rem);
    height: 6rem;
    flex-direction: row;
  }

  @media screen and (max-width: 615px) {
        border-radius: 0;
        height: 5rem;
        width: 100%;
    }
`;

export const LogoCont = styled.div`
  & svg {
    margin-top: 3rem;

    @media screen and (max-width: 950px) {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;

export const SidevarTopCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 950px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const SidebarNavContainerStyled = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 950px) {
    flex-direction: row;
    margin-top: 0;
    margin-left: 2rem;
  }
`;

export const NavStyled = styled.ul`
  list-style: none;
  padding: 0;

  @media screen and (max-width: 950px) {
    display: flex;
    padding-top: 0;
    margin-left: 2rem;
    width: 100%;
    justify-content: center;
  }

  & li {
    padding-top: 3rem;
    cursor: pointer;

    @media screen and (max-width: 950px) {
      padding-top: 0;
      padding-right: 2.5rem;
    }
  }

  & li:last-child {
    @media screen and (max-width: 950px) {
      padding-right: 0;
    }
  }

  & li a:hover > svg path {
    fill: #fd4746;
    transition: all 0.3s;
  }
`;

export const UserStyled = styled.div`
  cursor: pointer;

  @media screen and (max-width: 950px) {
    right: 2rem;
  }

  img {
    border-radius: 50%;
    width: 3rem;
    border: 1px solid white;
    margin-bottom: 3rem;

    @media screen and (max-width: 950px) {
      margin-bottom: 0;
      margin-right: 2rem;
    }

    @media screen and (max-width: 615px) {
        width: 2rem;
    }
  }
`;
