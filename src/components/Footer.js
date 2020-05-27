import React from 'react'
import styled from 'styled-components'
const StyledFooter = styled.footer`
    padding: 1rem;
    background-color: black;
    color: white;
    text-align: center;
    text-transform: capitalize;
`

const Footer = ({ siteSlogan }) => {
    return (
        <StyledFooter>
            <h2>{siteSlogan} <span>💎</span></h2>
            <span>😘</span>

        </StyledFooter>
    )
}

export default Footer
