import React from 'react'
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const ContenfullModelTempalate = ({ data }) => {
  console.log("model data", data);
  const { title, waist, size, shoe, runway, hip, height, haircolor, eyes, bust } = data.contentfulModels
  return (
    <>
      <img src={data.contentfulModels.images[0].fluid.src} alt={data.contentfulModels.title} />
      <article>
        <h1>{title}</h1>
        <section>
          <p>waist: <span>{waist}</span></p>
          <p>size: <span>{size}</span></p>
          <p>shoe: <span>{shoe}</span></p>
          <p>runway: <span>{runway}</span></p>
          <p>hip: <span>{hip}</span></p>
          <p>height: <span>{height}</span></p>
          <p>haircolor: <span>{haircolor}</span></p>
          <p>eyes: <span>{eyes}</span></p>
          <p>bust: <span>{bust}</span></p>
        </section>
        {documentToReactComponents(data.contentfulModels.description.json)}
      </article>
    </>
  )
}

export default ContenfullModelTempalate

export const query = graphql`
query($slug: String!) {
  contentfulModels(slug: {eq: $slug}) {
      id
      title
      slug
      waist
      size
      shoe
      runway
      hip
      height
      haircolor
      eyes
      bust
      images {
        fluid {
          src
        }
      }
      description {
        json
      }
    }
  }
`
