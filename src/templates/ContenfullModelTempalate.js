import React, { useState } from 'react'
import { graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from 'styled-components'
const StyledModelArticle = styled.article`
  h1 {
    font-size: 1.5rem;
  }
  p {
    font-style: italic;
  }
`
const StyledInfoSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  max-height: ${({ ModelInfo }) => (ModelInfo ? "100vh" : "0")};
  transition: ease-in-out 200ms;
  overflow: hidden;
  p {
    text-transform: capitalize;
    justify-self: end;
    font-weight: bold;

  }
  span {
    margin-left: .5rem;
  }
`

const StyledModelInfoButton = styled.a`
  cursor: pointer;
  display: block;
  margin: .5rem 0;
  border: 1px solid black;
  padding: .5rem 1rem;
  text-align: center;
`

const ModelInstagramLink = styled.a`
  cursor: pointer;
  display: block;
  margin: .5rem 0;
  border: 1px solid black;
  padding: .5rem 1rem;
  text-align: center;
`

const ContenfullModelTempalate = ({ data }) => {
  const { title, waist, size, shoe, runway, hip, height, haircolor, eyes, bust, images, instagram } = data.contentfulModels
  console.log("model data", data);
  const [HeroImg, setHeroImg] = useState(images[0].fluid.src)
  const [ModelInfo, setModelInfo] = useState(false)
  return (
    <>
      <img src={HeroImg} alt={title} />
      <section style={{ display: 'grid', gridTemplateColumns: `repeat(${images.length < 4 ? images.length : 4},1fr)` }}>
        {
          images.map((image) => {
            return (
              <img src={image.fluid.src} alt={title} onClick={(e) => setHeroImg(e.target.src)} onKeyDown={(e) => setHeroImg(e.target.src)} />
            )
          })
        }
      </section>
      <section style={{ padding: '.5rem' }}>
        <StyledModelArticle>
          <h1>{title}</h1>
          {documentToReactComponents(data.contentfulModels.description.json)}
        </StyledModelArticle>
        <StyledModelInfoButton onKeyDown={() => setModelInfo(!ModelInfo)} onClick={() => setModelInfo(!ModelInfo)}>{ModelInfo ? `Close info about ${title}` : `Open info about ${title}`}</StyledModelInfoButton>
        <StyledInfoSection ModelInfo={ModelInfo}>
          <p>haircolor: </p>
          <span>{haircolor}</span>
          <p>eyes: </p>
          <span>{eyes}</span>
          <p>height: </p>
          <span>{height}</span>
          <p>size:</p>
          <span>{size}</span>
          <p>hip: </p>
          <span>{hip}</span>
          <p>shoe: </p>
          <span>{shoe}</span>
          <p>bust: </p>
          <span>{bust}</span>
          <p>waist:</p>
          <span>{waist}</span>
          <p>runway: </p>
          <span>{runway ? "Yes" : "No"}</span>
        </StyledInfoSection>
        {
          instagram && <ModelInstagramLink href={instagram} target="_blank">{`See ${title}'s instagram`}</ModelInstagramLink>
        }
      </section>
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
      instagram
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
