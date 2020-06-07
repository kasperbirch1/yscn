const data = useStaticQuery(graphql`
    query {
      allInstaNode(sort: {fields: likes, order: DESC}, limit: 200) {
        nodes {
          id
          caption
          username
          likes
          localFile {
            childImageSharp {
              fluid(maxWidth: 120, maxHeight: 120) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);