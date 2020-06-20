import React from 'react';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css"
import "./FadeEffect.css"
import photo1 from '../../../images/yscn-logo.jpg'
import photo2 from '../../../images/yscn-hero-01.jpg'
import photo3 from '../../../images/yscn-hero.jpg'

const FadeEffect = () => {
    const params = {
        spaceBetween: 30,
        effect: 'fade',
        autoplay: {
            delay: 5500,
            disableOnInteraction: false
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }
    return (
        <Swiper {...params}>
            <section>
                <img style={{ height: '100%', objectFit: 'cover' }} src={photo1} alt="" />
                <h2>1</h2>
            </section>
            <section>
                <img style={{ height: '100%', objectFit: 'cover' }} src={photo2} alt="" />
                <h2>2</h2>
            </section>
            <section>
                <img style={{ height: '100%', objectFit: 'cover', objectPosition: 'top' }} src={photo3} alt="" />
                <h2>3</h2>
            </section>
        </Swiper>
    )
};
export default FadeEffect;