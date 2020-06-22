import React from 'react';
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css"
import "./FadeEffect.css"

const FadeEffect = () => {
    const data = useStaticQuery(graphql`
        query {
          heroImg1: file(relativePath: { eq: "yscn-logo.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heroImg2: file(relativePath: { eq: "yscn-hero-01.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          heroImg3: file(relativePath: { eq: "yscn-hero.jpg" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `)

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
                <Img fluid={data.heroImg1.childImageSharp.fluid} style={{ height: '100%', objectFit: 'cover' }} />
                <h2>1</h2>
            </section>
            <section>
                <Img fluid={data.heroImg2.childImageSharp.fluid} style={{ height: '100%', objectFit: 'cover' }} />
                <h2>2</h2>
            </section>
            <section>
                <Img fluid={data.heroImg3.childImageSharp.fluid} style={{ height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                <h2>3</h2>
            </section>
        </Swiper>
    )
};
export default FadeEffect;



