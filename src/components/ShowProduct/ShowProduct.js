import React from 'react'
import { PrimaryBtn } from "../page-elements/PrimaryBtn"
import productImg from '../../images/YSCN-nonnaked.jpg'

import styled from 'styled-components'
const StyledShowProduct = styled.section`
    background-color: WhiteSmoke;
    color: #313131;
    padding: 2rem;
    text-align: center;
    article {
        img {
            border-radius: .5rem;
            display: block;
            margin: 0 auto;
            max-width: 50%;
            margin-bottom: 1rem;
        }
        h3 {
            text-transform: uppercase;
            font-weight: bold;
            font-size: .8rem;
        }
        h2 {
            text-transform: capitalize;
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }
    }
`

const ShowProduct = () => {
    return (
        <StyledShowProduct>
            <article>
                <img src={productImg} alt="" />
                <h3>YSCN</h3>
                <h2>NONNAKED</h2>
                <PrimaryBtn style={{ backgroundColor: 'black', borderColor: 'black' }}>Buy Now</PrimaryBtn>
            </article>
        </StyledShowProduct>
    )
}

export default ShowProduct
