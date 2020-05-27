import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../../theme/breakpoints"
import { H1 } from '../page-elements/h1'

const DesktopNavMenu = ({ siteTitle, menuLinks }) => {
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
    <StyledHeader background={background}>
      <H1>{siteTitle}</H1>
      <ul>
        {menuLinks.map(link => {
          return (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          )
        })}
      </ul>
    </StyledHeader>
  )
}

export default DesktopNavMenu

const StyledHeader = styled.header`
  display: none;
  @media ${breakpoints.sm} {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top: 0;
    z-index: 10;
    padding: 0.5rem;
    transition: background 300ms;
    background: ${({ background }) => (background ? "#000" : "linear-gradient(to bottom,#25211e 0,rgba(37,33,30,0) 100%)")};
    color: white;
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
          color: white;
          transition: color 300ms;

          :hover {
            color: silver;
          }
        }
      }
    }
  }
`
