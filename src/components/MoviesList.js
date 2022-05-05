import React from 'react'

import ListContainer from './ListContainer';

import {RecommendedStyled} from '../components/styles/RecommendedStyled'

import data from "../data/data.json";


export default function MoviesList() {

   // Create array without trending movies
   let recommended = [];
   data.map((item) => {
       if(item.category == 'Movie') {
           recommended.push(item);
       }
   })

  return (
    <RecommendedStyled>
        <h1>Movies</h1>
        <ListContainer data={recommended} />
    </RecommendedStyled>
  )
}