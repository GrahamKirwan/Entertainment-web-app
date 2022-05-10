import React from 'react'

import ListContainer from './ListContainer';

import {RecommendedStyled} from '../components/styles/RecommendedStyled'

import data from "../data/data.json";


export default function BookmarksList(props) {

   // Create array without trending movies
   let recommended = [];
   data.map((item) => {
       if(item.category == 'Movie') {
           recommended.push(item);
       }
   })

     // Create array of search results
     let searchResults = [];
     recommended.map((item) => {
        let title = item.title.toLowerCase();
         if(title.includes(props.searchTerm)) {
          searchResults.push(item);
         }
     })

  return (
    <RecommendedStyled>
        {props.isSearching ? (<h1>Search Results ({searchResults.length})</h1>) : (<h1>Bookmarked Movies</h1>)}
        {props.searchTerm.length > 0 ? (<ListContainer data={searchResults} />) : (<ListContainer data={recommended} />)}

        {!props.isSearching && (<h1>Bookmarked TV Series</h1>)}
        {!props.isSearching && (<ListContainer data={recommended} />)}
    </RecommendedStyled>
  )
}