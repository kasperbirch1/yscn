import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ContenfullPageTempalate = (props) => {
    const data = useStaticQuery(graphql`
    query {
        contentfulPages(slug: {eq: "about"}) {
          id
          title
          slug
          content {
            json
          }
        }
      }
    `)
    console.log("ContenfullPageTempalate props:", props.pageContext.slug);
    // console.log("ContenfullPageTempalate data:", data);
    return (
        <>
            <h1 style={{ paddingTop: '5rem' }}>Hej Tempalte</h1>
            {documentToReactComponents(data.contentfulPages.content.json)}
        </>
    )
}

export default ContenfullPageTempalate
