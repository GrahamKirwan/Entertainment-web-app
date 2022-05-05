import React from 'react'

import ListContainer from './ListContainer';

import {RecommendedStyled} from '../components/styles/RecommendedStyled'

import data from "../data/data.json";


export default function TvSeriesList() {

   // Create array without trending movies
   let recommended = [];
   data.map((item) => {
       if(item.category == 'TV Series') {
           recommended.push(item);
       }
   })

  return (
    <RecommendedStyled>
        <h1>TV Series</h1>
        <ListContainer data={recommended} />
    </RecommendedStyled>
  )
}