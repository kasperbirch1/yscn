import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'
import AllProducts from '../components/Shop/AllProducts'
import Cart from '../components/Shop/Cart'

// Remember to add your public Stripe key
const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY}`)

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
