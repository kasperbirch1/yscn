import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImg = ({ currentUrl }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "yscn-logo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      {
        currentUrl === "/" ? null : <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      }
    </>
  )
}

export default HeroImg
