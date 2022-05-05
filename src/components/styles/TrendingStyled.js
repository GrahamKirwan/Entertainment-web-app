import styled from "styled-components";

import MoviePic from '../../images/thumbnails/beyond-earth/trending/large.jpg';


export const TrendingStyled = styled.div`

    & h1 {
        font-weight: 300;
        font-size: 2rem;
    }

    @media screen and (max-width: 615px) {
        margin-left: 2rem;
        margin-right: 2rem;
    }
`

export const TrendingCardContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    cursor: grab;

    &::-webkit-scrollbar {
        display: none;
    }


`

export const TrendingCardStyled = styled.div`
    flex: 0 0 auto;
    cursor: default;
    background-image: url(${MoviePic});
    width: 32rem;
    height: 15rem;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-right: 2.5rem;
    position: relative;
    box-shadow: inset 82px -82px 101px rgb(0 0 0 / 30%);
    overflow: hidden;
    transition: all .3s;


    &:hover > section{
        display: flex;
    }

    @media screen and (max-width: 950px) {
      width: 27rem;
      height: 13rem;
    }

    @media screen and (max-width: 615px) {
        width: 21rem;
      height: 11rem;
    }

`


export const TrendingCardBookmark = styled.div`
    position: absolute;
    cursor: pointer;
    right: 1rem;
    top: 1rem;
    height: 2.5rem;
    width: 2.5rem;
    background-color: rgba(115,115,115,0.5);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s;
    z-index: 10;


    &:hover {
        background-color: rgba(255,255,255,1);
    }

    & svg path {
    transition: all .3s;

    }

    &:hover > svg path  {
        stroke: rgba(115,115,115,1);
    }

    & svg {
        transform: scale(1.3);
    }

`

export const TrendingCardInfo = styled.div`
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    z-index: 10;


    & div {
        padding-bottom: 0.3;

        span {
            padding: 0 .2rem;
            font-weight: 200;

            &:first-child {
                padding-left: 0;
            }
        }
    }

    & h3 {
        margin: 0;
        padding: 0;
        font-size: 1.4rem;
        font-weight: 500;
    }
`

export const TrendingCardOverlay = styled.section`
    width: 100%;
    height: 100%;
    background-color: rgba(90,90,90,0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    display: none;
    transition: all .3s;
    cursor: pointer;
    
    div {
        width: 6rem;
        height: 3rem;
        background-color: rgba(40,40,40,0.5);
        display: flex;
        padding-left: 0.6rem;
        align-items: center;
        border-radius: 50px;

        span {
            padding-left: 0.6rem;
        }
    }
`