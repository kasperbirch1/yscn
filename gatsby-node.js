const path = require(`path`);

const query = `
{
  allContentfulPages(sort: {fields: order, order: ASC}) {
    nodes {
      title
      slug
    }
  }
  allContentfulModels {
    nodes {
      id
      title
      slug
    }
  }
}
`

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    ${query}
`)

  if (!data.allContentfulPages) return null
  /* Contenfull pages */
  data.allContentfulPages.nodes.forEach(page => {
    actions.createPage({
      path: `${page.slug}/`,
      component: path.resolve(`./src/templates/ContenfullPageTempalate.js`),
      context: {
        ...page,
        id: page.id,
        slug: page.slug,
        title: page.title,
      },
    })
  })
  /* Contenfull models  */
  if (!data.allContentfulModels) return null
  data.allContentfulModels.nodes.forEach(model => {
    actions.createPage({
      path: `${model.slug}/`,
      component: path.resolve(`./src/templates/ContenfullModelTempalate.js`),
      context: {
        ...model,
        id: model.id,
        slug: model.slug,
        title: model.title,
      },
    })
  })
}