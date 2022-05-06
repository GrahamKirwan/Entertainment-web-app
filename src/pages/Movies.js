import React from 'react'
import { useState } from 'react';

import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import MoviesList from '../components/MoviesList';
import { ContainerStyled, MainStyled } from '../components/styles/ContainerStyled';

export default function Movies() {

  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  function setIsSearchingHandler(searchValue) {
      setIsSearching(true);
      setSearchTerm(searchValue);
  }

  function setIsSearchingHandlerFalse(searchValue) {
      setIsSearching(false);
      setSearchTerm(searchValue);
  }

  return (
    <ContainerStyled>
        <Sidebar />
        <MainStyled>
            <SearchBar setIsSearchingHandler={setIsSearchingHandler} setIsSearchingHandlerFalse={setIsSearchingHandlerFalse}/>
            <MoviesList isSearching={isSearching} searchTerm={searchTerm}/>
        </MainStyled>
    </ContainerStyled>
  )
}
