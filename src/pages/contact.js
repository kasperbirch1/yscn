import React from 'react'
import styled from 'styled-components'
const StyledContactForm = styled.form`
    /* max-width: 50%; */
    /* margin: 0 auto; */
    display: grid;
    justify-content: center;
`

const contact = () => {
    return (
        <StyledContactForm method="post" action="#">
            <label>Name</label>
            <input type="text" name="name" id="name" />
            <label>Email</label>
            <input type="email" name="email" id="email" />
            <label>Subject </label>
            <input type="text" name="subject" id="subject" />
            <label> Message</label>
            <textarea name="message" id="message" rows="5" />
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
        </StyledContactForm>
    )
}

export default contact
