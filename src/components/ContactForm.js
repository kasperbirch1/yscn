import React, { useState } from "react"
import styled from 'styled-components'
const StyledContactForm = styled.form`
    /* max-width: 50%; */
    /* margin: 0 auto; */
    display: grid;
    justify-content: center;

    textarea {
        resize: none;
    }
`

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const encode = data => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formState }),
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error))

        e.preventDefault()
    }
    return (
        <StyledContactForm
            onSubmit={handleSubmit}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formState.name}
                placeholder="Enter your name"
            />
            <label htmlFor="phone">Phone</label>
            <input
                id="phone"
                type="tel"
                name="phone"
                onChange={handleChange}
                value={formState.phone}
                placeholder="Enter your phone number"
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={formState.email}
                placeholder="Enter your email"
            />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Enter your message" cols="30" rows="10"></textarea>

            <button type="submit">Submit</button>
        </StyledContactForm>
    )
}

export default ContactForm
