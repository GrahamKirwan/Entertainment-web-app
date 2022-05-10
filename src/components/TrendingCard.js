import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useContext } from 'react';

import { BookmarkContext } from './store/bookmark-context';
import { AuthContext } from './store/auth-context';

import {TrendingCardStyled, TrendingCardBookmark, TrendingCardInfo, TrendingCardOverlay} from '../components/styles/TrendingStyled';
import { ReactComponent as BookmarkIcon } from '../images/assets/icon-bookmark-empty.svg'
import { ReactComponent as BookmarkIconFull } from '../images/assets/icon-bookmark-full.svg'
import { ReactComponent as MovieIcon } from '../images/assets/icon-category-movie.svg'
import { ReactComponent as TVIcon } from '../images/assets/icon-category-tv.svg'
import { ReactComponent as PlayIcon } from '../images/assets/icon-play.svg'


export default function TrendingCard(props) {

  const ctx = useContext(BookmarkContext);
  const ctxAuth = useContext(AuthContext);

    let title = props.movie.title;
    let bookmarked = props.movie.isBookmarked;

    function bookmarkClickHandler() {
      if(ctxAuth.isLoggedIn) {
          if(bookmarked) {
              ctx.removeBookmark(title);
              toast.success("Bookmark removed!");
          }
          else {
              ctx.addBookmark(title);
              toast.success("Bookmark added!");
          }
      } else {
        toast.error("Please login!");
      }
  }
   
  return (
    <TrendingCardStyled movie={props.movie}>
            <TrendingCardBookmark onClick={bookmarkClickHandler}>{props.movie.isBookmarked ? (<BookmarkIconFull/>) : (<BookmarkIcon/>)}</TrendingCardBookmark>
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