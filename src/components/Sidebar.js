import React from 'react'

import { useContext, useState } from 'react';
import { AuthContext } from '../components/store/auth-context';

import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

import { SidebarStyled, SidebarNavContainerStyled, NavStyled, UserStyled, LogoCont, SidevarTopCont, Logoutbox } from './styles/SidebarStyled'

import { ReactComponent as Logo } from '../images/assets/logo.svg'
import { ReactComponent as HomeIcon } from '../images/assets/icon-nav-home.svg'
import { ReactComponent as MoviesIcon } from '../images/assets/icon-nav-movies.svg'
import { ReactComponent as TvSeriesIcon } from '../images/assets/icon-nav-tv-series.svg'
import { ReactComponent as BookmarkIcon } from '../images/assets/icon-nav-bookmark.svg'
import { ReactComponent as LoginIcon } from '../images/assets/icon-login.svg'
import UserPic from '../images/assets/image-avatar.png';

import styles from '../components/styles/active.module.scss'


export default function Sidebar() {

    const [showLogout, setShowLogout] = useState(false);

    const ctx = useContext(AuthContext);

    let location = useLocation();
    location = location.pathname.substring(1);

    function logoutBoxHandler() {
        ctx.logout();
        setShowLogout(false);
    }
    
    function userImageClicked() {
        setShowLogout(!showLogout);
    }
    
  return (
    <SidebarStyled>
        <SidevarTopCont>
            <LogoCont><Logo /></LogoCont>
            <NavStyled>
                <li><Link to="/"><HomeIcon className={location == '' ? styles.active : ''}/></Link></li>
                <li><Link to="/movies"><MoviesIcon className={location == 'movies' ? styles.active : ''}/></Link></li>
                <li><Link to="/tv-series"><TvSeriesIcon className={location == 'tv-series' ? styles.active : ''}/></Link></li>
                {ctx.isLoggedIn && (<li><Link to="/bookmarks"><BookmarkIcon className={location == 'bookmarks' ? styles.active : ''}/></Link></li>)}
                
            </NavStyled>
        </SidevarTopCont>
        <UserStyled>
            {showLogout && (<Logoutbox onClick={logoutBoxHandler}>
                <p>Logout</p>
            </Logoutbox>)}
            {ctx.isLoggedIn && (<div onClick={userImageClicked}><img src={UserPic}/></div>)}
            {!ctx.isLoggedIn && (<Link to="/login"><LoginIcon/></Link>)}
        </UserStyled>
    </SidebarStyled>
  )
}
