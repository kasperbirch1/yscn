import React, { useState } from 'react'
import { useShoppingCart, removeItem } from 'use-shopping-cart'
import styled from 'styled-components'
const StyledCart = styled.article`
    padding: .5rem;
    display: grid;
    h4 {
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.25rem;
        margin: .25rem;
    }
    ul{
        li{
            padding: .5rem;
            border-top: 1px solid rgba(229,223,217,.5);
            border-bottom: 1px solid rgba(229,223,217,.5);
            display: grid;
            grid-template-columns: 3fr 1fr;
        }
    }
`

const Cart = () => {
    const [status, setStatus] = useState('idle')
    const { cartDetails, totalPrice, redirectToCheckout, cartCount, clearCart } = useShoppingCart()

    async function handleClick(event) {
        event.preventDefault()
        if (cartCount > 0) {
            setStatus('idle')
            const error = await redirectToCheckout()
            if (error) setStatus('redirect-error')
        } else {
            setStatus('missing-items')
        }
    }
    console.log("cartDetails", cartDetails);

    return (
        <StyledCart>
            <h4>Shopping Bag ({cartCount})</h4>
            <ul>
                {Object.values(cartDetails).map(product => {
                    return (
                        <li key={product.name}>
                            <div>
                                <h2>{product.name} ({product.quantity})</h2>
                                <p>{product.formattedValue}</p>
                            </div>
                            <img src={product.image} alt={product.name} />
                        </li>
                    )
                })}
            </ul>
            <button onClick={clearCart}>Remove all items</button>
            <h4>TotalPrice: {`${totalPrice / 100} kr.`}</h4>
            <button onClick={handleClick}>Checkout</button>
        </StyledCart>
    )
}

export default Cart
