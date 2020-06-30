import React from 'react'
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
    return (
        <ul>
            {
                products.map(product => {
                    return (
                        <li><Product product={product} /></li>
                    )
                })
            }
        </ul>
    )
}

export default AllProducts
