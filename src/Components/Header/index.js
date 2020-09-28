import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import Logo from '../../../images/logo.svg';
import IconHamburger from '../../../images/icon-hamburger.svg';
import IconClose from '../../../images/icon-close.svg';

import StyledHeader from './styles';
const Header = () => {
    const width = useWindowWidth();
    const [menuOpen, setMenuOpen] = useState(false);


    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <StyledHeader width={width} menuOpen={menuOpen}>
            <button id="hamburger" onClick={() => handleMenuOpen()}>
                <img src={menuOpen ? IconClose : IconHamburger} />
            </button>
            <img src={Logo} id="logo" />
            <div id="menu">
                <a href='#Home'>Home</a>
                <a href='#Shop'>Shop</a>
                <a href='#About'>About</a>
                <a href='#Contact'>Contact</a>
            </div>
        </StyledHeader>
    );
}


export default Header;