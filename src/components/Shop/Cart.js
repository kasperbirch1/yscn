import React, { useState } from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'

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
    return (
        <>
            {/* <pre>{JSON.stringify({ cartDetails }, null, 2)}</pre> */}
            {status === 'missing-items' && (
                <p>missing-items</p>
            )}
            {status === 'redirect-error' && (
                <p>Unable to redirect to Stripe checkout page.</p>
            )}
            <details style={{ marginBottom: '2rem' }}>
                <summary>Cart Details ({cartCount}) TotalPrice: {`${totalPrice / 100} kr.`}</summary>
                <ul>
                    {Object.values(cartDetails).map(product => {
                        return (
                            <li key={product.name}>{product.name} ({product.quantity}) - {product.formattedValue}</li>
                        )
                    })}
                </ul>
                <button onClick={clearCart}>Remove all items</button>
                <button onClick={handleClick}>Checkout</button>
            </details>
        </>
    )
}

export default Cart
