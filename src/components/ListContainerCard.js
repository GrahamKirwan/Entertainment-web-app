import React from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useContext } from 'react';

import { BookmarkContext } from './store/bookmark-context';
import { AuthContext } from './store/auth-context';

import {
    ListContainerCardStyled,
    ListContainerCardBg,
    ListContainerCardInfo,
    RecommendedCardOverlay,
    RecommendedCardBookmark,
  } from "../components/styles/ListContainerStyled";

  import { ReactComponent as PlayIcon } from "../images/assets/icon-play.svg";
  import { ReactComponent as BookmarkIcon } from "../images/assets/icon-bookmark-empty.svg";
  import { ReactComponent as BookmarkIconFull } from "../images/assets/icon-bookmark-full.svg";
  import { ReactComponent as MovieIcon } from "../images/assets/icon-category-movie.svg";
  import { ReactComponent as TVIcon } from "../images/assets/icon-category-tv.svg";

export default function ListContainerCard(props) {

    const ctx = useContext(BookmarkContext);
    const ctxAuth = useContext(AuthContext);

    let title = props.item.title;
    let bookmarked = props.item.isBookmarked;

    function bookmarkClickHandler() {
        if(ctxAuth.isLoggedIn) {
            if(bookmarked) {
                ctx.removeBookmark(title);
                toast.success(title + " removed from bookmarks!");
            }
            else {
                ctx.addBookmark(title);
                toast.success(title + " added to bookmarks!");
            }
        } else {
          toast.error("Please login!");
        }
    }

  return (
    <ListContainerCardStyled>
            <ListContainerCardBg movie={props.item}>
              <RecommendedCardBookmark value={props.item.title} onClick={bookmarkClickHandler}>
                {props.item.isBookmarked ? (<BookmarkIconFull/>) : (<BookmarkIcon/>)}
              </RecommendedCardBookmark>
              <RecommendedCardOverlay>
                <div>
                  <PlayIcon />
                  <span>Play</span>
                </div>
              </RecommendedCardOverlay>
            </ListContainerCardBg>
            <ListContainerCardInfo>
              <div>
                <span>{props.item.year}</span> •{" "}
                <span>
                  {props.item.category == "Movie" ? <MovieIcon /> : <TVIcon />}{" "}
                  {props.item.category}
                </span>{" "}
                • <span>{props.item.rating}</span>
              </div>
              <h3>{props.item.title}</h3>
            </ListContainerCardInfo>
          </ListContainerCardStyled>
  )
}
