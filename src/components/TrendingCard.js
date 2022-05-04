import React from 'react'

import {TrendingCardStyled, TrendingCardBookmark, TrendingCardInfo} from '../components/styles/TrendingStyled';
import { ReactComponent as BookmarkIcon } from '../images/assets/icon-bookmark-empty.svg'
import { ReactComponent as MovieIcon } from '../images/assets/icon-category-movie.svg'


export default function TrendingCard(props) {
   
  return (
    <TrendingCardStyled>
            <TrendingCardBookmark><BookmarkIcon/></TrendingCardBookmark>
            <TrendingCardInfo>
                <div><span>2019</span> • <span><MovieIcon/> Movie</span> • <span>PG</span></div>
                <h3>Beyond Earth</h3>
            </TrendingCardInfo>
    </TrendingCardStyled>
  )
}
