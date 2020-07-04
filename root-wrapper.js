import React from "react"
import { ThemeProvider } from "styled-components"
import Layout from "./src/components/layout"
import { GlobalStyle, theme } from "./src/theme/global-style"
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from 'use-shopping-cart'
// Remember to add your public Stripe key
const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl="https://yscn.netlify.app/stripeSuccess"
      cancelUrl="https://yscn.netlify.app/stripeCancel"
      currency="DKK"
      allowedCountries={['DK']}
      billingAddressCollection={true}
    >
      <Layout >{element}</Layout>
    </CartProvider>
  </ThemeProvider>
)
