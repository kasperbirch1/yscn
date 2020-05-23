import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../../theme/breakpoints"

const MobileNavMenu = () => {
  const [menuOpen, toggleMenuOpen] = useState(false)

  return (
    <MenuBar>
      <MenuIconContainer>
        <h1>YSCN</h1>
        <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </MenuIconContainer>
      <MenuLinks menuOpen={menuOpen}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/merch">Merch</Link>
          </li>
          <li>
            <Link to="/about">Contact</Link>
          </li>
        </ul>
      </MenuLinks>
    </MenuBar>
  )
}

export default MobileNavMenu

const MenuBar = styled.header`
  @media ${breakpoints.sm} {
    display: none;
  }
  height: 3rem;
  position: fixed;
  width: 100%;
  background-image: linear-gradient( rgb(0, 0, 0, .5),rgba(255, 255, 255, 0));
  border-bottom: "blue";
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuIconContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuIcon = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  /* outline: thin-dotted; */
  outline: none;
  z-index: 11;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ menuOpen }) => (menuOpen ? "red" : "black")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
      transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const MenuLinks = styled.nav`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background: blue;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transition: transform 300ms;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0)" : "translateX(100%)"};

  ul {
    width: 100%;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`
