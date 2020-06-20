import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import DesktopNavMenu from '../components/Menu/DesktopNav'
import MobileNavMenu from '../components/Menu/MobileNav'



const Header = ({ siteTitle, menuLinks }) => {
  const data = useStaticQuery(graphql`
  query {
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
        <DesktopNavMenu siteTitle={siteTitle} menuLinks={menuLinks} />
        <MobileNavMenu siteTitle={siteTitle} menuLinks={menuLinks} />
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
