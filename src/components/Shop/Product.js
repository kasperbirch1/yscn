import React from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import styled from "styled-components"
const StyledArticle = styled.article`
    h2 {
        font-weight: bold;
    }
    button {
        height: 3rem;
        text-transform: uppercase;
        display: block;
        width: 100%;
        padding: .5rem;
        margin: .5rem 0;
        border: 1px solid black;
        text-align: center;
        background-color: transparent;
    }
`


const Product = ({ product }) => {
    const { addItem } = useShoppingCart()
    console.log("product", product);
    return (
        <StyledArticle>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <h3>{`${product.price / 100} kr.`}</h3>
            <button
                onClick={() => addItem(product)}
            >{`Tilføj ${product.name}`}</button>
        </StyledArticle>
    )
}

export default Product
