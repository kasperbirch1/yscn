import React from 'react'
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import photo1 from '../images/yscn-logo.jpg'


const ContenfullPageTempalate = ({ data }) => {
  return (
    <>
      <img src={photo1} alt="hero" />
      {documentToReactComponents(data.contentfulPages.content.json)}
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
