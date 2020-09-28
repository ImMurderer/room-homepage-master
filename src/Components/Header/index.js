import React from 'react';

import Logo from '../../../images/logo.svg';

import StyledHeader from './styles';
const Header = () => {
    return (
        <StyledHeader>
            <img src={Logo} />
            <a href='#Home'>Home</a>
            <a href='#Shop'>Shop</a>
            <a href='#About'>About</a>
            <a href='#Contact'>Contact</a>
        </StyledHeader>
    );
}


export default Header;