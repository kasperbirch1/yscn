import React from 'react'
import styled from 'styled-components'
const StyledSection = styled.section`
    font-family: Limelight;
    font-family: Italianno;
    padding: 1rem;
    font-size: 2.5rem;
    text-align: center;
    :first-letter {
        text-transform: uppercase;
    }
`

const FrontpageText = ({ text }) => {
    return (
        <StyledSection >
            <h2>{text}</h2>
        </StyledSection>
    )
}

export default FrontpageText
