import React from "react"
import SEO from "../components/seo"
import FadeEffect from '../components/Hero/FadeEffect'
import ShowProduct from '../components/ShowProduct/ShowProduct'
import InstagramCoverflowEffect from '../components/InstagramCoverflowEffect/InstagramCoverflowEffect'


const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <FadeEffect />
      <ShowProduct />
      <InstagramCoverflowEffect />
    </>
  )
}

export default IndexPage
