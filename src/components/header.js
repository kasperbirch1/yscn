import PropTypes from "prop-types"
import React from "react"
import { globalHistory } from '@reach/router'
import { useStaticQuery, graphql } from "gatsby"
import DesktopNavMenu from '../components/Menu/DesktopNav'
import MobileNavMenu from '../components/Menu/MobileNav'
import HeroImg from '../components/HeroImg'


const Header = () => {
  const { location } = globalHistory
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
        <HeroImg CurrentUrl={location.pathname} />
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
