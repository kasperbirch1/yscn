import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const SecondPage = () => {
  const data = useStaticQuery(graphql`
  query {
      allContentfulPages(sort: {fields: order, order: ASC}) {
        nodes {
          title
          slug
          content {
            json
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Page two" />
      <h1 style={{ paddingTop: '5rem' }}>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      {
        data.allContentfulPages.nodes.map((page, index) => {
          return (
            <section key={index} style={{ padding: '1rem' }}>
              {documentToReactComponents(page.content.json)}
            </section>
          )
        })
      }
    </>
  )
}

export default SecondPage
