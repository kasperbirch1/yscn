import React from 'react'
import styled from 'styled-components'
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa'
const StyledFooter = styled.footer`
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
        padding: 1rem;
        cursor: pointer;
        svg {
            font-size: 2.5rem;
        }
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <a href="https://www.facebook.com/YSCN.dk" target="_blank" rel="noreferrer">
                <FaFacebookSquare />
            </a>
            <a href="https://www.instagram.com/yscn.dk/" target="_blank" rel="noreferrer">
                <FaInstagram />
            </a>
            <a href="https://www.youtube.com/channel/UCfYbb7qiUwzKxCeQWioH62Q" target="_blank" rel="noreferrer">
                <FaYoutube />
            </a>
        </StyledFooter>
    )
}

export default Footer
