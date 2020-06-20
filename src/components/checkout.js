import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_51Guv6TFMpSXFCLYaJvgtpF8kgQvPmJH0wMEMAeXjnHqUUz6B8ksdxRw1BvrmaBpOxhV68A6tgiDU93LDo19TJZRw007cXQPjyg")
const redirectToCheckout = async event => {
    event.preventDefault()
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: "price_1Gw2GBFMpSXFCLYaHqsXVdMx", quantity: 1 }],
        mode: "payment",
        successUrl: `http://localhost:8000/page-2/`,
        cancelUrl: `http://localhost:8000/`,
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