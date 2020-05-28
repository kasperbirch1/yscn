import React from 'react'
import Image from 'gatsby-image';
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css"
import "./InstagramCoverflowEffect.css"
import useInstagram from '../../hooks/useInstagram';

const InstagramCoverflowEffect = () => {
    const instaPhotos = useInstagram();
    const { username } = instaPhotos[0];

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
        },
        pagination: {
            el: '.swiper-pagination'
        }
    }
    return (
        <>
            <h2>Instagram posts from @{username}</h2>
            <Swiper {...params}>
                {
                    instaPhotos.map(photo => {
                        return (
                            <div className="swiper-slide" key={photo.id}  >
                                <Image key={photo.id} fluid={photo.fluid} />
                            </div>
                        )
                    })
                }
            </Swiper>
            <a href={`https://instagram.com/${username}`}>See more from {username} on Instagram</a>
        </>
    )
}

export default InstagramCoverflowEffect
