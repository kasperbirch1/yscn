import React from 'react'
import Image from 'gatsby-image';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css"
import "./InstagramCoverflowEffect.css"
import useInstagram from '../../hooks/useInstagram';
import styled from 'styled-components'
const StyledeInstaLink = styled.a`
    text-decoration: none;
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
`

const InstagramCoverflowEffect = () => {
    const instaPhotos = useInstagram();
    // const { username } = instaPhotos[0];

    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        }
    }
    return (
        <section style={{ margin: '2rem 0' }}>
            <Swiper {...params}>
                {
                    instaPhotos.map(photo => {
                        return (
                            <div className="swiper-slide swiper-slide-insta" key={photo.id}  >
                                <Image key={photo.id} fluid={photo.fluid} />
                            </div>
                        )
                    })
                }
                <div className="swiper-slide swiper-slide-insta swiper-slide-insta-infobox">
                    <StyledeInstaLink href="https://instagram.com/yscn.dk" target="_blank">check out yscn.dk on instagram</StyledeInstaLink>
                </div>
            </Swiper>
        </section>
    )
}

export default InstagramCoverflowEffect
