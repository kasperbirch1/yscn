import React from 'react'
import { StyledStripeCompletion } from '../components/page-elements/StripeStyles'

const stripeSuccess = () => {
    return (
        <StyledStripeCompletion>
            <article>
                <h1>Thank you for your purchase</h1>
                <p>We will send your new design as soon as possible.</p>
            </article>
        </StyledStripeCompletion>
    )
}

export default stripeSuccess
