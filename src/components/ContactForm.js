import React, { useState } from "react"
import { breakpoints } from '../theme/breakpoints'
import styled from 'styled-components'
const StyledContactForm = styled.form`
    margin: .5rem;
    border: 1px solid #ccc;
    border-radius: .5rem;
    padding: 1rem .5rem;
    display: grid;

    input, textarea {
        border: none;
        border-bottom: 1px solid #ccc;
        background: transparent;
        margin-bottom: 1rem;
        padding-top: .75rem;
        ::placeholder,
        ::-webkit-input-placeholder {
            color: #ccc;
            font-style: italic;
            text-align: center;
        }
        :focus {
            outline-color: #ccc;
        }
    }
    textarea {
        resize: none;
        border: 1px solid #ccc;
        border-radius: .5rem;
    }
    button {
        background: transparent;
        border: 1px solid #ccc;
        border-radius: .5rem;
        padding: .5rem 1rem;
        text-align: center;
        text-transform: uppercase;
        :hover {
            box-shadow: 0 0 11px rgba(33,33,33,.2); 
        }
    }
    @media ${breakpoints.sm} {
        margin: .5rem auto;
        max-width: 30%;
    }
`

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
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
                placeholder="Please enter your name here.."
            />
            <label htmlFor="phone">Phone</label>
            <input
                id="phone"
                type="tel"
                name="phone"
                onChange={handleChange}
                value={formState.phone}
                placeholder="Please enter your phone number here.."
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={formState.email}
                placeholder="Please enter your email here.."
            />
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                onChange={handleChange}
                value={formState.message}
                placeholder="Please enter your message here.."
                cols="30" rows="10"></textarea>

            <button type="submit">Submit</button>
        </StyledContactForm>
    )
}

export default ContactForm
