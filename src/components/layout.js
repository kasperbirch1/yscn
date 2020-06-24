import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  useEffect(() => {
    // override root variable called --vh width current screen size to and listen for a resize event
    document.querySelector(':root').style.setProperty('--vh', window.innerHeight + 'px');
    window.addEventListener('resize', () => {
      document.querySelector(':root').style.setProperty('--vh', window.innerHeight + 'px');
    })

  }, []);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          description
          slogan
          menuLinks {
            link
            name
          }
        }
      }
    }
  `)
  return (
    <div style={{ minHeight: 'var(--vh)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
