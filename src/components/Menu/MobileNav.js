import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../../theme/breakpoints"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import { H1 } from '../page-elements/h1'

const MobileNavMenu = ({ siteTitle, menuLinks }) => {
  const [menuOpen, toggleMenuOpen] = useState(false)
  const [background, setBackground] = useState(false)
  const navRef = useRef()

  navRef.current = background
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 120
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
        <H1>{siteTitle}</H1>
        {menuOpen ?
          <AiOutlineMenuUnfold style={{ zIndex: '11', fontSize: '1.5rem', color: 'black' }} onClick={() => toggleMenuOpen(!menuOpen)} />
          :
          <AiOutlineMenuFold style={{ zIndex: '11', fontSize: '1.5rem' }} onClick={() => toggleMenuOpen(!menuOpen)} />
        }
      </MenuIconContainer>
      <MenuLinks menuOpen={menuOpen}>
        <ul>
          {menuLinks.map(link => {
            return (
              <li key={link.name}>
                <Link to={link.link} onClick={() => toggleMenuOpen(!menuOpen)}>{link.name}</Link>
              </li>
            )
          })}
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
  background: ${({ background }) => (background ? "#000" : "linear-gradient(to bottom,#25211e 0,rgba(37,33,30,0) 100%)")};
  color: white;
  height: 3rem;
  position: fixed;
  width: 100%;
  border-bottom: "blue";
  z-index: 10;
  display: flex;
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
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  display: grid;
  place-content: center;
  align-items: center;
  background: white;
  height: 100vh;
  width: 100%;
  transition: transform 300ms;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0)" : "translateX(100%)"};

  ul {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    li {
      list-style: none;
      display: block;
      text-align: center;
      width: 100%;

      a {
        font-size: 2rem;
        text-transform: uppercase;
        text-decoration: none;
        color: black;
      }
    }
  }
`
