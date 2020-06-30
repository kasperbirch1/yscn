import React from 'react'
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { breakpoints } from '../theme/breakpoints'
import styled from 'styled-components'
const StyledArticle = styled.article`
  padding: 1rem;
  h1 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: .75rem;
    text-align: center;
    font-family: Rozha One;
  }
  h2 {
    font-family: Rozha One;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: .75rem;
  }
  p {
    font-family: "times new roman";
    /* font-family: Poppins; */
    margin-bottom: .5rem;
  }
  b {
    font-weight: bold;
  }
  @media ${breakpoints.sm} {
    max-width: 75%;
    margin: 0 auto;
  }
`

const ContenfullPageTempalate = ({ data }) => {
  return (
    <>
      <StyledArticle>
        {documentToReactComponents(data.contentfulPages.content.json)}
      </StyledArticle>
    </>
  )
}

export default ContenfullPageTempalate

export const query = graphql`
query($slug: String!) {
    contentfulPages(slug: {eq: $slug}) {
      id
      title
      slug
      content {
        json
      }
    }
  }
`
