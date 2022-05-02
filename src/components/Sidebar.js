import React from 'react'

import { SidebarStyled, SidebarNavContainerStyled, NavStyled } from './styles/SidebarStyled'

import { ReactComponent as Logo } from '../images/assets/logo.svg'
import { ReactComponent as HomeIcon } from '../images/assets/icon-nav-home.svg'
import { ReactComponent as MoviesIcon } from '../images/assets/icon-nav-movies.svg'
import { ReactComponent as TvSeriesIcon } from '../images/assets/icon-nav-tv-series.svg'
import { ReactComponent as BookmarkIcon } from '../images/assets/icon-nav-bookmark.svg'


export default function Sidebar() {
  return (
    <SidebarStyled>
        <SidebarNavContainerStyled>
            <Logo />
            <NavStyled>
                <li><HomeIcon/></li>
                <li><MoviesIcon/></li>
                <li><TvSeriesIcon/></li>
                <li><BookmarkIcon/></li>
            </NavStyled>
        </SidebarNavContainerStyled>
        
    </SidebarStyled>
  )
}
