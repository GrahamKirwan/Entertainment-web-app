import React from 'react'

import { useRef, useEffect } from 'react';

import TrendingCard from './TrendingCard';

import {TrendingStyled, TrendingCardContainer} from '../components/styles/TrendingStyled';

import MoviePic from '../images/thumbnails/beyond-earth/trending/large.jpg';


export default function Trending() {

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


  return (
    <TrendingStyled>
        <h1>Trending</h1>
        <TrendingCardContainer ref={sliderRef} onMouseDown={sliderMouseDown} onMouseLeave={sliderMouseLeave} onMouseUp={sliderMouseUp} onMouseMove={sliderMouseMove}>
            <TrendingCard moviePic={MoviePic}/>
            <TrendingCard moviePic={MoviePic}/>
            <TrendingCard moviePic={MoviePic}/>
            <TrendingCard moviePic={MoviePic}/>
        </TrendingCardContainer>
    </TrendingStyled>

    )

}
