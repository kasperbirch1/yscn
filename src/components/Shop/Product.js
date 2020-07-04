import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'

const Product = ({ product }) => {
    // console.log("product", product);

    const { addItem } = useShoppingCart()
    return (
        <article>
            <img style={{ width: "200px" }} src={product.image} alt="" />
            <h2>{product.name}</h2>
            <h3>{`${product.price / 100} kr.`}</h3>
            <button
                onClick={() => addItem(product)}
            >{`Køb ${product.name}`}</button>
        </article>
    )
}

export default Product
