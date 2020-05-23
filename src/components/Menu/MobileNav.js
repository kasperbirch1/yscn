import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../../theme/breakpoints"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'

const MobileNavMenu = () => {
  const [menuOpen, toggleMenuOpen] = useState(false)
  const [background, setBackground] = useState(false)
  const navRef = useRef()

  navRef.current = background
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 2
      if (navRef.current !== show) {
        setBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <MenuBar background={background}>
      <MenuIconContainer>
        <h1>YSCN</h1>
        {menuOpen ?
          <AiOutlineMenuUnfold style={{ zIndex: '11' }} menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)} />
          :
          <AiOutlineMenuFold style={{ zIndex: '11' }} menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)} />
        }
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
  background: ${({ background }) => (background ? "#000" : "linear-gradient( rgb(0, 0, 0, .5),rgba(255, 255, 255, 0))")};
  color: white;
  height: 3rem;
  position: fixed;
  width: 100%;
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
