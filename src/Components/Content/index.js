import React from 'react';
import StyledContent from './styles';

import ImageHeroOne from '../../../images/desktop-image-hero-1.jpg';
import IconArrow from '../../../images/icon-arrow.svg';
import IconAngleLeft from '../../../images/icon-angle-left.svg';
import IconAngleRight from '../../../images/icon-angle-right.svg';


const Home = () => {
    return (
        <StyledContent>
            <img src={ImageHeroOne} />
            <div>
                <h1>Discover innovative ways to decorate</h1>
                <p>

                    We provide unmatched quality, comfort, and style for property owners across the country.
                    Our experts combine form and function in bringing your vision to life. Create a room in your
                    own style with our collection and make your property a reflection of you and what you love.
                    <span>
                        <a>
                            Shop now {' '}
                            <img src={IconArrow} />
                        </a>
                    </span>
                </p>
                <div className="control-buttons">
                    <button><img src={IconAngleLeft} /></button>
                    <button><img src={IconAngleRight} /></button>
                </div>
            </div>
        </StyledContent>
    )
}

export default Home;