import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import DesktopNavMenu from '../components/Menu/DesktopNav'
import MobileNavMenu from '../components/Menu/MobileNav'


const Header = ({ menuLinks }) => {
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
  console.log("header data", data.allContentfulPages.nodes);

  return (
    <>
      <header>
        <DesktopNavMenu menuLinks={data.allContentfulPages.nodes} />
        <MobileNavMenu menuLinks={data.allContentfulPages.nodes} />
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
