import React from "react"
import SEO from "../components/seo"
import InstagramCoverflowEffect from '../components/InstagramCoverflowEffect/InstagramCoverflowEffect'
import FrontpageText from '../components/FrontpageText/FrontpageText'
// import video from '../images/yscn-mobile.mp4'

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      {/* <video style={{ width: '100%', display: 'block', overflow: 'hidden' }} autoPlay muted loop playsinline>
        <source src={video} type="video/mp4" />
      </video> */}
      <FrontpageText />
      <InstagramCoverflowEffect />
    </>
  )
}

export default IndexPage
