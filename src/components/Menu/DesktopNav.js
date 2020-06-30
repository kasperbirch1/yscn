import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../../theme/breakpoints"
import logoImg from '../../images/yscn-logo-black.png'

const DesktopNavMenu = ({ menuLinks }) => {
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
    <StyledNav background={background}>
      <img src={logoImg} alt="YSCN Logo" />
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        {menuLinks.map(link => {
          return (
            <li key={link.title}>
              <Link to={`/${link.slug}`}>{link.title}</Link>
            </li>
          )
        })}
        <li>
          <Link to="/shop" >Shop</Link>
        </li>
        <li>
          <Link to="/yscn-models" >Models</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default DesktopNavMenu

const StyledNav = styled.nav`
  display: none;
  @media ${breakpoints.sm} {
    margin-bottom: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    z-index: 10;
    padding: 0.5rem;
    transition: background 300ms;
    background: ${({ background }) => (background ? "#FFF" : "linear-gradient(to bottom,#25211e 0,rgba(37,33,30,0) 100%)")};
    img {
      width: 100px;
    }
    ul {
      max-width: 800px;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-around;
      margin: 0;

      li {
        list-style: none;

        a {
          text-transform: uppercase;
          text-decoration: none;
          color: ${({ background }) => (background ? "#000" : "rgba(229,223,217,.5)")};
          transition: color 300ms;

          :hover {
            color: silver;
          }
        }
      }
    }
  }
`
