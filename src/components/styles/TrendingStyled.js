import styled from "styled-components";

import MoviePic from '../../images/thumbnails/beyond-earth/trending/small.jpg';


export const TrendingStyled = styled.div`

    & h1 {
        font-weight: 300;
        font-size: 2rem;
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

    background-image: url(${MoviePic});
    width: 29rem;
    height: 15rem;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-right: 2.5rem;
    position: relative;
`


export const TrendingCardBookmark = styled.div`
    position: absolute;
    cursor: pointer;
    right: 1rem;
    top: 1rem;
    height: 2rem;
    width: 2rem;
    background-color: rgba(115,115,115,0.5);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const TrendingCardInfo = styled.div`
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;

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
