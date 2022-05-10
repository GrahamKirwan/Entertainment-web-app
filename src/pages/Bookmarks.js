import React from 'react'
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../components/store/auth-context';

import Sidebar from '../components/Sidebar'

import SearchBar from '../components/SearchBar';
import BookmarksList from '../components/BookmarksList';
import { ContainerStyled, MainStyled } from '../components/styles/ContainerStyled';

export default function Bookmarks() {

  const ctx = useContext(AuthContext);
  const history = useHistory();

  if(!ctx.isLoggedIn){
    history.replace('/')
  }

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
              <BookmarksList isSearching={isSearching} searchTerm={searchTerm}/>
          </MainStyled>
    </ContainerStyled>
  )
}
