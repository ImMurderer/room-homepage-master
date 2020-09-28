import React from 'react';
import StyledFooter from './styles';
import { useWindowWidth } from '@react-hook/window-size';

import ImageDark from '../../../images/image-about-dark.jpg';
import ImageLight from '../../../images/image-about-light.jpg';


const Footer = () => {
    const width = useWindowWidth();
    return (
        <StyledFooter width={width}>
            <img src={ImageDark} alt="Image presenting two sofas in a dark place" />

            <section>
                <h3>About our furniture</h3>
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </section>
            <img src={ImageLight} alt="Image presenting a white chair in a white well iluminated plate" />
        </StyledFooter>
    )
}

export default Footer