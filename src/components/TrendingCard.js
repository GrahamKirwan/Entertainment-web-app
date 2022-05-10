import React from 'react'

import {TrendingCardStyled, TrendingCardBookmark, TrendingCardInfo, TrendingCardOverlay} from '../components/styles/TrendingStyled';
import { ReactComponent as BookmarkIcon } from '../images/assets/icon-bookmark-empty.svg'
import { ReactComponent as BookmarkIconFull } from '../images/assets/icon-bookmark-full.svg'
import { ReactComponent as MovieIcon } from '../images/assets/icon-category-movie.svg'
import { ReactComponent as TVIcon } from '../images/assets/icon-category-tv.svg'
import { ReactComponent as PlayIcon } from '../images/assets/icon-play.svg'


export default function TrendingCard(props) {

   
  return (
    <TrendingCardStyled movie={props.movie}>
            <TrendingCardBookmark>{props.movie.isBookmarked ? (<BookmarkIconFull/>) : (<BookmarkIcon/>)}</TrendingCardBookmark>
            <TrendingCardInfo>
                <div><span>{props.movie.year}</span> • <span>{props.movie.category == 'Movie' ? <MovieIcon/> : <TVIcon/>} {props.movie.category}</span> • <span>{props.movie.rating}</span></div>
                <h3>{props.movie.title}</h3>
            </TrendingCardInfo>
            <TrendingCardOverlay>
                <div>
                    <PlayIcon/>
                    <span>Play</span>
                </div>
            </TrendingCardOverlay>
    </TrendingCardStyled>
  )
}