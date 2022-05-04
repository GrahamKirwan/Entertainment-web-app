import React from 'react'

import { ReactComponent as SearchIcon } from '../images/assets/icon-search.svg'
import {SearchBarStyled, SearchBarCont} from '../components/styles/SearchBarStyled';

export default function SearchBar() {
  return (
    <>
        <SearchBarCont>
            <SearchIcon />
            <SearchBarStyled autocomplete="false" name="hidden" type="text" placeholder='Search for movies or TV series'/>
        </SearchBarCont>
    </>
  )
}
