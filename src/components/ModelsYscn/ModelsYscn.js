import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { breakpoints } from '../../theme/breakpoints'
import styled from 'styled-components'

const StyledModelsYscnContainer = styled.section`
    margin: 0 .5rem;
    h1 {
        text-align: center;
        font-size: 1.75rem;
        font-weight: bold;
    }
    ul {
        display: grid;
        grid-gap: .5rem;
        margin-bottom: .5rem;
        @media ${breakpoints.sm} {
            grid-template-columns: repeat(2, 1fr)
        }
    }
`

const ModelsYscn = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulModels {
            nodes {
              id
              title
              slug
              description {
                content {
                  content {
                    value
                  }
                }
              }
              images {
                fluid {
                  src
                }
              }
            }
          }
    }
    `)
    const models = data.allContentfulModels.nodes

    return (
        <StyledModelsYscnContainer>
            <h1>All YSCN Models</h1>
            <ul>
                {
                    models.map((model, index) => {
                        return (
                            <li key={index}>
                                <ModelLink name={model.title} slug={model.slug} img={model.images[0].fluid.src} />
                            </li>
                        )
                    })
                }
            </ul>
        </StyledModelsYscnContainer>
    )
}

export default ModelsYscn
/////////////////////////////////////////////////////////
const StyledModelLink = styled.article`
    background-image: url('${props => props.img}');
    background-repeat: no-repeat;
    background-position:  center;
    background-size: cover;
    height: 500px;
    display: grid;
    grid-template-rows: 1fr auto;
    h2 {
        grid-row: 2/-1;
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem;
        color: white;
        background-color: rgba(0,0,0,.75);
        @media ${breakpoints.sm} {
          background-color: transparent;
            font-size: 2.5rem;
        }
    }
  
`
function ModelLink({ img, name, slug }) {
    return (
        <Link to={slug}>
            <StyledModelLink img={img}>
                <h2>{name}</h2>
            </StyledModelLink>
        </Link>
    )
}
