import React from "react";

import {
  ListContainerStyled,
  ListContainerCard,
  ListContainerCardBg,
  ListContainerCardInfo,
  RecommendedCardOverlay,
  RecommendedCardBookmark,
} from "../components/styles/ListContainerStyled";
import { ReactComponent as PlayIcon } from "../images/assets/icon-play.svg";
import { ReactComponent as BookmarkIcon } from "../images/assets/icon-bookmark-empty.svg";
import { ReactComponent as MovieIcon } from "../images/assets/icon-category-movie.svg";
import { ReactComponent as TVIcon } from "../images/assets/icon-category-tv.svg";

export default function ListContainer(props) {
  return (
    <ListContainerStyled>
      {props.data.map((item, key) => {
        return (
          <ListContainerCard key={key}>
            <ListContainerCardBg movie={item}>
              <RecommendedCardBookmark>
                <BookmarkIcon />
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
                <span>{item.year}</span> •{" "}
                <span>
                  {item.category == "Movie" ? <MovieIcon /> : <TVIcon />}{" "}
                  {item.category}
                </span>{" "}
                • <span>{item.rating}</span>
              </div>
              <h3>{item.title}</h3>
            </ListContainerCardInfo>
          </ListContainerCard>
        );
      })}
    </ListContainerStyled>
  );
}
