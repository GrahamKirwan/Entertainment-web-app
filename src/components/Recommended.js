import React from 'react'

import ListContainer from './ListContainer';

import {RecommendedStyled} from '../components/styles/RecommendedStyled'

import data from "../data/data.json";


export default function Recommended() {

   // Create array without trending movies
   let recommended = [];
   data.map((item) => {
       if(!item.isTrending) {
           recommended.push(item);
       }
   })

  return (
    <RecommendedStyled>
        <h1>Recommended for you</h1>
        <ListContainer data={recommended} />
    </RecommendedStyled>
  )
}