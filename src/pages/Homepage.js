import React from 'react'

import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import Trending from '../components/Trending';
import { ContainerStyled, MainStyled } from '../components/styles/ContainerStyled';

export default function Homepage() {
  return (
    <ContainerStyled>
        <Sidebar />
        <MainStyled>
            <SearchBar />
            <Trending />
        </MainStyled>
    </ContainerStyled>
  )
}
