import React from 'react'

import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import TvSeriesList from '../components/TvSeriesList';
import { ContainerStyled, MainStyled } from '../components/styles/ContainerStyled';

export default function TvSeries() {
  return (
    <ContainerStyled>
        <Sidebar />
        <MainStyled>
            <SearchBar />
            <TvSeriesList />
        </MainStyled>
    </ContainerStyled>
  )
}
