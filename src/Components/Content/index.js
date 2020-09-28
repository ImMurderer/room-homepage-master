import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import StyledContent from './styles';

// Desktop Images
import ImageHeroOne from '../../../images/desktop-image-hero-1.jpg';
import ImageHeroTwo from '../../../images/desktop-image-hero-2.jpg';
import ImageHeroThree from '../../../images/desktop-image-hero-3.jpg';

// Mobile Images
import MobileImageHeroOne from '../../../images/mobile-image-hero-1.jpg';
import MobileImageHeroTwo from '../../../images/mobile-image-hero-2.jpg';
import MobileImageHeroThree from '../../../images/mobile-image-hero-3.jpg';

import IconArrow from '../../../images/icon-arrow.svg';
import IconAngleLeft from '../../../images/icon-angle-left.svg';
import IconAngleRight from '../../../images/icon-angle-right.svg';

const Home = () => {
    const width = useWindowWidth();
    const slides = [
        {
            img: width > 375 ? ImageHeroOne : MobileImageHeroOne,
            title: 'Discover innovative ways to decorate',
            text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
        }, {
            img: width > 375 ? ImageHeroTwo : MobileImageHeroTwo,
            title: 'We are available all across the globe',
            text: 'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we\'re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.'
        }, {
            img: width > 375 ? ImageHeroThree : MobileImageHeroThree,
            title: 'Manufactured with the best materials',
            text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (n) => {
        setCurrentSlide((currentSlide + n + 3) % 3);
    }

    return (
        <StyledContent width={width}>
            <img src={slides[currentSlide].img} />
            <div>
                <h1>{slides[currentSlide].title}</h1>
                <p>
                    {slides[currentSlide].text}
                    <span>
                        <a>
                            Shop now {' '}
                            <img src={IconArrow} />
                        </a>
                    </span>
                </p>
                <div className="control-buttons">
                    <button onClick={() => handleClick(-1)}><img src={IconAngleLeft} /></button>
                    <button onClick={() => handleClick(1)}><img src={IconAngleRight} /></button>
                </div>
            </div>
        </StyledContent>
    )
}

export default Home;