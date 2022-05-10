import React from 'react'
import { useRef, useEffect } from 'react';
import { BookmarkContext } from './store/bookmark-context';

import { useContext } from 'react';

import TrendingCard from './TrendingCard';
import {TrendingStyled, TrendingCardContainer} from '../components/styles/TrendingStyled';

import MoviePic from '../images/thumbnails/beyond-earth/trending/large.jpg';

import data from "../data/data.json";


export default function Trending(props) {

    const ctx = useContext(BookmarkContext);

    // Slider logic
    const sliderRef = useRef();
    let slider;

    useEffect(() => {
        slider = sliderRef.current;
        if (!slider) return;
    },[]);

    let isDown = false;
    let startX;
    let scrollLeft;

    function sliderMouseDown(e) {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }

    function sliderMouseLeave() {
        isDown = false;
    }

    function sliderMouseUp() {
        isDown = false;
    }

    function sliderMouseMove(e) {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
    }
    // End Slider logic

    // Create trending movies array
    let trendingMovies = [];
    ctx.data.map((movie) => {
        if(movie.isTrending){
            trendingMovies.push(movie);
        }
    });
    

  return (
    <TrendingStyled style={props.isSearching ? {display: 'none'} : {display: 'inherit'}}>
        <h1>Trending</h1>
        <TrendingCardContainer ref={sliderRef} onMouseDown={sliderMouseDown} onMouseLeave={sliderMouseLeave} onMouseUp={sliderMouseUp} onMouseMove={sliderMouseMove}>
            {trendingMovies.map((movie, key) => (<TrendingCard key={key} movie={movie} moviePic={MoviePic}/>))}
        </TrendingCardContainer>
    </TrendingStyled>

    )

}
