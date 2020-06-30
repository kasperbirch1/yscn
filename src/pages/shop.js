import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'
import AllProducts from '../components/Shop/AllProducts'
import Cart from '../components/Shop/Cart'

// Remember to add your public Stripe key
const stripePromise = loadStripe("pk_test_51Gw560IgQIWhgcN3J5FrTkHJnD3ak5wF2KYZ06A8qpgmoi2EOiziTH4ZjocQyQvDDXPx7B629ulxWphqlP0MoVZj00mmnAJKBM")

const shop = () => {
    return (
        <CartProvider
            mode="client-only"
            stripe={stripePromise}
            successUrl="https://yscn.netlify.app/stripeSuccess"
            cancelUrl="https://yscn.netlify.app/stripeCancel"
            currency="DKK"
            allowedCountries={['DK']}
            billingAddressCollection={true}
        >
            <Cart />
            <AllProducts />
        </CartProvider>
    )
}

export default shop
