import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Product from '../Shop/Product'

const products = [
    {
        name: 'Non naked long',
        sku: 'price_1Gw5NjIgQIWhgcN3yx9x8kX9',
        price: 149900,
        image: "https://files.stripe.com/links/fl_test_HqKYN71IJahk6wCrgvgxjDTB",
        currency: 'dkk'
    }
]

const AllProducts = () => {
    const data = useStaticQuery(graphql`
    query {
        allStripeProduct {
          nodes {
            id
            name
            description
            images
          }
        }
      }`)
    console.log("AllProducts", data.allStripeProduct.nodes);

    return (
        <ul>
            {
                data.allStripeProduct.nodes.map(product => {
                    return (
                        <li key={product.id}><Product product={product} /></li>
                    )
                })
            }
        </ul>
    )
}

export default AllProducts
