import React from 'react'

import { useRef } from 'react';

import { ReactComponent as SearchIcon } from '../images/assets/icon-search.svg'
import {SearchBarStyled, SearchBarCont} from '../components/styles/SearchBarStyled';

export default function SearchBar(props) {

    const searchRef = useRef();


    function searchBarSearchingHandler() {
        if(searchRef.current.value.length > 0) {
            props.setIsSearchingHandler(searchRef.current.value);
        }
        if(searchRef.current.value.length == 0) {
            props.setIsSearchingHandlerFalse(searchRef.current.value);
        }
    }

  return (
    <>
        <SearchBarCont>
            <SearchIcon />
            <SearchBarStyled ref={searchRef} onKeyUp={searchBarSearchingHandler} autocomplete="false" name="hidden" type="text" placeholder='Search for movies or TV series'/>
        </SearchBarCont>
    </>
  )
}
