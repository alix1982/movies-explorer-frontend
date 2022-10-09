import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-movie.svg';
import Navigation from '../Navigation/Navigation.js';

function Header (props) {
  return (
    <header className="header">
      <Link to="/">
        <img src= {logo} className="header__logo" alt="Логотип"/>
      </Link>
      <div className={`header__nav header__nav${props.offNavigation}`}>
        <Navigation 
          isNavigationPopupOpen = {props.isNavigationPopupOpen} 
          onClose = {props.onClose} onCloseOverlay = {props.onCloseOverlay} 
          onPopupNavigation = {props.onPopupNavigation}
        />
      </div>
    </header>
  )
}

export default Header
