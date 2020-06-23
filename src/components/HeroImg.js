import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImg = ({ CurrentUrl }) => {
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
        CurrentUrl === "/" ? null : <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      }
    </>
  )
}

export default HeroImg
