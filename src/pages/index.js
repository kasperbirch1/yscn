import React from "react"
import SEO from "../components/seo"
import Parallax from '../components/Hero/Parallax'
import ShowProduct from '../components/ShowProduct/ShowProduct'
import InstagramCoverflowEffect from '../components/InstagramCoverflowEffect/InstagramCoverflowEffect'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Parallax />
    <ShowProduct />
    <InstagramCoverflowEffect />
  </>
)

export default IndexPage
