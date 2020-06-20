import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_51Gw560IgQIWhgcN3J5FrTkHJnD3ak5wF2KYZ06A8qpgmoi2EOiziTH4ZjocQyQvDDXPx7B629ulxWphqlP0MoVZj00mmnAJKBM")
const redirectToCheckout = async event => {
    event.preventDefault()
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: "price_1Gw5NjIgQIWhgcN3yx9x8kX9", quantity: 1 }],
        mode: "payment",
        successUrl: `https://yscn.netlify.app/`,
        cancelUrl: `https://yscn.netlify.app/404`,
    })
    if (error) {
        console.warn("Error:", error)
    }
}
const Checkout = () => {
    return (
        <button onClick={redirectToCheckout}>
            BUY NOW
        </button>
    )
}
export default Checkout