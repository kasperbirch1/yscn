import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import { H1, P } from "../components/page-elements"
import SEO from "../components/seo"
import Parallax from '../components/Hero/Parallax'
import ShowProduct from '../components/ShowProduct/ShowProduct'
const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Parallax />
    <ShowProduct />
  </>
)

export default IndexPage
