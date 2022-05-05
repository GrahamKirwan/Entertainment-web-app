import React from 'react'

import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import MoviesList from '../components/MoviesList';
import { ContainerStyled, MainStyled } from '../components/styles/ContainerStyled';

export default function Movies() {
  return (
    <ContainerStyled>
        <Sidebar />
        <MainStyled>
            <SearchBar />
            <MoviesList />
        </MainStyled>
    </ContainerStyled>
  )
}
