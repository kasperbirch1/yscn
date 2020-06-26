import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { breakpoints } from '../theme/breakpoints'
import styled from 'styled-components'
const StyledHeroImg = styled(Img)`
  @media ${breakpoints.sm} {
    max-height: 50vh;
  }
`

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
        CurrentUrl === "/" ? null : <StyledHeroImg fluid={data.placeholderImage.childImageSharp.fluid} />
      }
    </>
  )
}

export default HeroImg
