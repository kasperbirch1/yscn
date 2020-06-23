import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import DesktopNavMenu from '../components/Menu/DesktopNav'
import MobileNavMenu from '../components/Menu/MobileNav'
import HeroImg from '../components/HeroImg'


const Header = () => {
  const data = useStaticQuery(graphql`
  {
    allContentfulPages(sort: {fields: order, order: ASC}) {
      nodes {
        title
        slug
      }
    }
  }
  `)

  return (
    <>
      <header>
        <DesktopNavMenu menuLinks={data.allContentfulPages.nodes} />
        <MobileNavMenu menuLinks={data.allContentfulPages.nodes} />
        <HeroImg currentUrl={window.location.pathname} />
      </header>

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
