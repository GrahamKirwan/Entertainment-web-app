import React from 'react'
import { useContext } from 'react';
import { BookmarkContext } from './store/bookmark-context';

import ListContainer from './ListContainer';

import {RecommendedStyled} from '../components/styles/RecommendedStyled'



export default function BookmarksList(props) {

    const ctx = useContext(BookmarkContext);

   // Create array with bookmarked movies
   let bookmarkedMovies = [];
   ctx.data.map((item) => {
       if(item.category == 'Movie' && item.isBookmarked) {
            bookmarkedMovies.push(item);
       }
   })

   let bookmarkedTV = [];
   ctx.data.map((item) => {
       if(item.category == 'TV Series' && item.isBookmarked) {
        bookmarkedTV.push(item);
       }
   })

     // Create array of search results
     let allBookmarked = [...bookmarkedMovies, ...bookmarkedTV];
     let searchResults = [];
     allBookmarked.map((item) => {
        let title = item.title.toLowerCase();
         if(title.includes(props.searchTerm)) {
          searchResults.push(item);
         }
     })

  return (
    <RecommendedStyled>
        {props.isSearching ? (<h1>Search Results ({searchResults.length})</h1>) : (<h1>Bookmarked Movies</h1>)}
        {props.searchTerm.length > 0 ? (<ListContainer data={searchResults} />) : (<ListContainer data={bookmarkedMovies} />)}

        {!props.isSearching && (<h1>Bookmarked TV Series</h1>)}
        {!props.isSearching && (<ListContainer data={bookmarkedTV} />)}
    </RecommendedStyled>
  )
}