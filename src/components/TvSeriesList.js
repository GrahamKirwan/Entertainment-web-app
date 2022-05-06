import React from "react";

import ListContainer from "./ListContainer";

import { RecommendedStyled } from "../components/styles/RecommendedStyled";

import data from "../data/data.json";

export default function TvSeriesList(props) {
  // Create array without trending movies
  let recommended = [];
  data.map((item) => {
    if (item.category == "TV Series") {
      recommended.push(item);
    }
  });

  // Create array of search results
  let searchResults = [];
  recommended.map((item) => {
    let title = item.title.toLowerCase();
    if (title.includes(props.searchTerm)) {
      searchResults.push(item);
    }
  });

  return (
    <RecommendedStyled>
      {props.isSearching ? (
        <h1>Search Results ({searchResults.length})</h1>
      ) : (
        <h1>TV Series</h1>
      )}
      {props.searchTerm.length > 0 ? (
        <ListContainer data={searchResults} />
      ) : (
        <ListContainer data={recommended} />
      )}
    </RecommendedStyled>
  );
}
