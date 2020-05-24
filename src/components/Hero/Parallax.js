import React from 'react';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css"
import "./Parallax.css"
import styled from "styled-components"
const StyledSwiperArticle = styled.article`
    height: 70vh;
    padding: 4rem 1rem;
    color: wheat;
    h2 {
        font-size: 2.5rem;
    }
    h3 {
        font-size: 1.5rem;
    }
    p {
        font-size: 1rem;
    }
`

const Parallax = () => {
    const params = {
        speed: 400,
        parallax: true,
        parallaxEl: {
            el: '.parallax-bg',
            value: '-23%'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {
            delay: 8000,
            disableOnInteraction: false
        }
    }
    return (


        <Swiper className="parallax-bg" {...params}>
            <StyledSwiperArticle>
                <h2 data-swiper-parallax="-300">Slide #1 </h2>
                <h3 data-swiper-parallax="-200">Subtitle</h3>
                <div data-swiper-parallax="-100">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
                    amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
                    Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. </p>
                </div>
            </StyledSwiperArticle>
            <StyledSwiperArticle>
                <h2 data-swiper-parallax="-300">Slide #2 </h2>
                <h3 data-swiper-parallax="-200">Subtitle</h3>
                <div data-swiper-parallax="-100">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
                    amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
                    Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. </p>
                </div>
            </StyledSwiperArticle>
            <StyledSwiperArticle>
                <h2 data-swiper-parallax="-300">Slide #3 </h2>
                <h3 data-swiper-parallax="-200">Subtitle</h3>
                <div data-swiper-parallax="-100">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit
                    amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor.
                    Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. </p>
                </div>
            </StyledSwiperArticle>
        </Swiper>

    )
};
export default Parallax;