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
    },
    {
        name: "Ocean wiew",
        sku: "price_1H0EJmIgQIWhgcN3fYt7p1y5",
        price: 139900,
        image: "https://files.stripe.com/links/fl_test_Z8zXzHCrzO9TJYxpyjAGftRS",
        currency: "dkk"
    }
]

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
    console.log("testarray", testarray);

    return (
        <ul>
            {
                testarray.map((product) => {
                    return (
                        <li key={product.sku} ><Product product={product} /></li>
                    )
                })
            }
        </ul>
    )
}

export default AllProducts
