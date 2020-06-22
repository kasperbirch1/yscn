import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../../theme/breakpoints"
import { IoIosMenu } from 'react-icons/io'
import { RiCloseLine } from 'react-icons/ri'
// import logoImg from '../../images/yscn-logo-black.png'

const MobileNavMenu = ({ menuLinks }) => {
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
        {menuOpen ?
          <RiCloseLine style={{ zIndex: '11', fontSize: '1.5rem', color: 'black' }} onClick={() => toggleMenuOpen(!menuOpen)} />
          :
          <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => toggleMenuOpen(!menuOpen)} onKeyDown={(e) => toggleMenuOpen(!menuOpen)} role="button" tabIndex={0} >
            <IoIosMenu style={{ zIndex: '11', fontSize: '1.5rem' }} />
            <span style={{ lineHeight: "1" }}>MENU</span>
          </div>
        }
        {/* <img src={logoImg} alt="YSCN Logo" /> */}
      </MenuIconContainer>
      <MenuLinks menuOpen={menuOpen}>
        <ul>
          <li>
            <Link to="/" onClick={() => toggleMenuOpen(!menuOpen)}>Home</Link>
          </li>
          {menuLinks.map(link => {
            return (
              <li key={link.title}>
                <Link to={link.slug} onClick={() => toggleMenuOpen(!menuOpen)}>{link.title}</Link>
              </li>
            )
          })}
          <li>
            <Link to="/yscn-models" onClick={() => toggleMenuOpen(!menuOpen)}>YSCN Models</Link>
          </li>
        </ul>
      </MenuLinks>
    </MenuBar>
  )
}

export default MobileNavMenu

const MenuBar = styled.nav`
  @media ${breakpoints.sm} {
    display: none;
  }
  background: ${({ background }) => (background ? "#FFF" : "linear-gradient(to bottom,#25211e 0,rgba(37,33,30,0) 100%)")};
  color: ${({ background }) => (background ? "#000" : "rgba(229,223,217,.5)")};
  position: fixed;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
`

const MenuIconContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: .5rem;

  img {
    justify-self: center;
    width: 75px;
  }
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
