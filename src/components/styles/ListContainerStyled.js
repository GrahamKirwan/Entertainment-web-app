import styled from "styled-components";

export const ListContainerStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2.5rem;

  @media screen and (max-width: 1350px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
  }

  @media screen and (max-width: 615px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
    }
`;

export const ListContainerCard = styled.div`
  overflow: hidden;
`;

export const ListContainerCardBg = styled.div`
  height: 12rem;
  background-color: green;
  background-image: ${(props) =>
    `url(${props.movie.thumbnail.regular.large}) `};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  &:hover > section {
    display: flex;
  }

  @media screen and (max-width: 950px) {
    height: 11rem;
  }

  @media screen and (max-width: 615px) {
      height: 9rem;
    }
`;

export const ListContainerCardInfo = styled.div`
  margin-top: 0.7rem;
  span {
    font-size: 0.9rem;
    font-weight: 200;
  }

  h3 {
    margin: 0;
    font-weight: 500;
  }
`;

export const RecommendedCardOverlay = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(90, 90, 90, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  display: none;
  transition: all 0.3s;
  cursor: pointer;

  div {
    width: 6rem;
    height: 3rem;
    background-color: rgba(40, 40, 40, 0.5);
    display: flex;
    padding-left: 0.6rem;
    align-items: center;
    border-radius: 50px;

    span {
      padding-left: 0.6rem;
    }
  }
`;

export const RecommendedCardBookmark = styled.div`
  position: absolute;
  cursor: pointer;
  right: 1rem;
  top: 1rem;
  height: 2.5rem;
  width: 2.5rem;
  background-color: rgba(115, 115, 115, 0.5);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  z-index: 10;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  & svg path {
    transition: all 0.3s;
  }

  &:hover > svg path {
    stroke: rgba(115, 115, 115, 1);
  }

  & svg {
    transform: scale(1.3);
  }
`;
