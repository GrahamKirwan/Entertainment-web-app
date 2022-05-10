import React from "react";

import {
  ListContainerStyled
} from "../components/styles/ListContainerStyled";

import ListContainerCard from '../components/ListContainerCard'

export default function ListContainer(props) {



  return (
    <ListContainerStyled>
      {props.data.map((item, key) => {
        return (
          <ListContainerCard item={item} key={key}></ListContainerCard>
          
        );
      })}
    </ListContainerStyled>
  );
}
