import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
const StyledSection = styled.section`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 25rem 2rem 5rem;
    margin-bottom: .5rem;
    a{
        h2 {
            text-transform: uppercase;
            text-align: center;
            padding: .75rem;
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
            border: .75rem solid white;
            :hover {
                border-color: #F5E7D2;
                color: #F5E7D2;
            }
        }
    }

`

const FrontpageImgTextBox = ({ img, text, link }) => {
    return (
        <StyledSection style={{ backgroundImage: `url(${img})` }}>
            <Link to={link}>
                <h2>{text}</h2>
            </Link>
        </StyledSection>
    )
}

export default FrontpageImgTextBox
