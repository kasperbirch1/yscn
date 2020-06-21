import React from 'react'
import ModelsYscn from '../components/ModelsYscn/ModelsYscn'
import heroimg from '../images/yscn-logo.jpg'


const models = () => {
    return (
        <>
            <img src={heroimg} alt="yscn hero" />
            <ModelsYscn />
        </>
    )
}

export default models
