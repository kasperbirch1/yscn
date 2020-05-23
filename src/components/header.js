import PropTypes from "prop-types"
import React from "react"
import DesktopNavMenu from '../components/Menu/DesktopNav'
import MobileNavMenu from '../components/Menu/MobileNav'



const Header = ({ siteTitle, ShowMenu, setShowMenu }) => {
  return (
    <>
      <DesktopNavMenu />
      <MobileNavMenu />
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
