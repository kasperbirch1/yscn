import PropTypes from "prop-types"
import React from "react"
import { H1 } from "./page-elements"
import MainMenu from '../components/Menu/MainMenu'

import styled from 'styled-components'
const StyledHeader = styled.header`
  padding: 1rem .5rem;
  background-image: linear-gradient( rgb(0, 0, 0, .5),rgba(255, 255, 255, 0));
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
`

const Header = ({ siteTitle, ShowMenu, setShowMenu }) => {
  function toggle() {
    setShowMenu(!ShowMenu);
  }

  return (
    <>
      <StyledHeader>
        <H1 style={{ margin: 0 }}> {siteTitle} </H1>
        {!ShowMenu ? <button onClick={toggle}>Menu</button> : null}
        {ShowMenu ? <MainMenu ShowMenu={ShowMenu} setShowMenu={setShowMenu} /> : null}
      </StyledHeader >
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
