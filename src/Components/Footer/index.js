import React from 'react';
import StyledFooter from './styles';

import ImageDark from '../../../images/image-about-dark.jpg';
import ImageLight from '../../../images/image-about-light.jpg';


const Footer = () => {
    return (
        <StyledFooter>
            <img src={ImageDark} />

            <div>
                <h3>About our furniture</h3>
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <img src={ImageLight} />
        </StyledFooter>
    )
}

export default Footer