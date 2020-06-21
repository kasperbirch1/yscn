import React from 'react'
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ContenfullPageTempalate = ({ data }) => {
    return (
        <>
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
