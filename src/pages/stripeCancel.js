import React from 'react'
import { StyledStripeContainer, StyledStripeCompletion } from '../components/page-elements/StripeStyles'



const stripeCancel = () => {
    return (
        <>
            <StyledStripeContainer>
                <StyledStripeCompletion>
                    <h1>Something went wrong.</h1>
                    <p>Please try again or contact YSCN customer service.</p>
                </StyledStripeCompletion>
            </StyledStripeContainer>
        </>
    )
}

export default stripeCancel
