import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
const Stylednav = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,.5);
    display: grid;
    place-content: center;
`

function MainMenu({ ShowMenu, setShowMenu }) {
    function toggle() {
        setShowMenu(!ShowMenu);
    }
    return (
        <Stylednav >
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>
            <button onClick={toggle}>{ShowMenu ? "Luk menuen" : "åben munuen"}</button>
        </Stylednav>
    )
}

export default MainMenu
