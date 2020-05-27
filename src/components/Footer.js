import React from 'react'
import styled from 'styled-components'
const StyledFooter = styled.footer`
    padding: 1rem;
    background-color: black;
    color: white;
    text-align: center;
    text-transform: capitalize;
    h2 {
        font-style: italic;
        margin-bottom: .5rem;
    }
`

const Footer = ({ siteSlogan }) => {
    return (
        <StyledFooter>
            <h2>{siteSlogan}</h2>
            <span style={{ fontSize: '2rem' }}>💎</span>
        </StyledFooter>
    )
}

export default Footer
