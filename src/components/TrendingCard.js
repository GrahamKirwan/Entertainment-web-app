import React from 'react'

import {TrendingCardStyled, TrendingCardBookmark, TrendingCardInfo, TrendingCardOverlay} from '../components/styles/TrendingStyled';
import { ReactComponent as BookmarkIcon } from '../images/assets/icon-bookmark-empty.svg'
import { ReactComponent as MovieIcon } from '../images/assets/icon-category-movie.svg'
import { ReactComponent as PlayIcon } from '../images/assets/icon-play.svg'


export default function TrendingCard(props) {
   
  return (
    <TrendingCardStyled>
            <TrendingCardBookmark><BookmarkIcon/></TrendingCardBookmark>
            <TrendingCardInfo>
                <div><span>2019</span> • <span><MovieIcon/> Movie</span> • <span>PG</span></div>
                <h3>Beyond Earth</h3>
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
