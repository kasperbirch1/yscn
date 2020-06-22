import React from 'react'
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import HeroImg from '../components/HeroImg'
import styled from 'styled-components'
const StyledArticle = styled.article`
  padding: 1rem;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: .75rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: .75rem;
  }
  p {
    margin-bottom: .5rem;
  }
  b {
    font-weight: bold;
  }
`


const ContenfullPageTempalate = ({ data }) => {
  return (
    <>
      <HeroImg />
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
