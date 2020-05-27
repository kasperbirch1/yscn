import React from 'react'
import { PrimaryBtn } from "../page-elements/PrimaryBtn"
import productImg from '../../images/YSCN-nonnaked.jpg'

import styled from 'styled-components'
const StyledShowProduct = styled.section`
    background-color: #e6e6e6;
    color: #313131;
    padding: 2rem;
    text-align: center;
    article {
        img {
            border-radius: .5rem;
            display: block;
            margin: 0 auto;
            max-width: 50%;
        }
        
    }
`

const ShowProduct = () => {
    return (
        <StyledShowProduct>
            <article>
                <img src={productImg} alt="" />
                <span>💎</span>
                <h3>YSCN</h3>
                <h2>NONNAKED</h2>
                <PrimaryBtn style={{ backgroundColor: 'black', borderColor: 'black' }}>Buy Now</PrimaryBtn>
            </article>
        </StyledShowProduct>
    )
}

export default ShowProduct
