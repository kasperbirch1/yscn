import React from "react"
import SEO from "../components/seo"
import InstagramCoverflowEffect from '../components/InstagramCoverflowEffect/InstagramCoverflowEffect'
import FrontpageText from '../components/Frontpage/FrontpageText'
import FrontpageImgTextBox from '../components/Frontpage/FrontpageImgTextBox'
import FrontpageVideo from '../components/Frontpage/FrontpageVideo'
import image1 from '../images/frontpage_01.jpg'
import image2 from '../images/frontpage_02.jpg'
import image3 from '../images/yscn-hero.jpg'

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <FrontpageVideo />
      <FrontpageText />
      <img style={{ marginBottom: '.5rem' }} src={image1} alt="yscn" />
      <FrontpageImgTextBox img={image2} text="tap here to see the models" link="/yscn-models" />
      <FrontpageImgTextBox img={image3} text="tap here to see the make-up artist's" link="/makeup" />
      <InstagramCoverflowEffect />
    </>
  )
}

export default IndexPage
