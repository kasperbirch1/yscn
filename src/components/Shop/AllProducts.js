import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Product from '../Shop/Product'
import styled from 'styled-components'
const StyledUl = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
`

const AllProducts = () => {
    const data = useStaticQuery(graphql`
    query {
        allStripePrice {
            nodes {
              id
              currency
              unit_amount
              product {
                id
                name
                description
                images
              }
            }
          }
      }`)
    // console.log("AllProducts", data.allStripePrice.nodes);
    const testarray = data.allStripePrice.nodes.map(product => {
        return (
            {
                name: product.product.name,
                sku: product.id,
                price: product.unit_amount,
                image: product.product.images[0],
                currency: product.currency
            }
        )
    })
    // console.log("testarray", testarray);

    return (
        <StyledUl>
            {
                testarray.map((product) => {
                    return (
                        <li key={product.sku} ><Product product={product} /></li>
                    )
                })
            }
        </StyledUl>
    )
}

export default AllProducts
