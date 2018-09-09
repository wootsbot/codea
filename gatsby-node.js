const path = require('path')
const createPaginatedPages = require('gatsby-paginate')

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(
    `src/templates/blogDetailsOverviewTemplate.js`
  )

  const PaginatedPageTemplate = path.resolve(`src/templates/page.js`)

  return graphql(`
    {
      posts: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 200)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              author {
                id
                bio
                twitter
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    createPaginatedPages({
      edges: result.data.posts.edges,
      createPage: createPage,
      pageTemplate: PaginatedPageTemplate,
      pageLength: 10,
      pathPrefix: '/blog',
      buildPath: (index, pathPrefix) =>
        index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`,
      context: {},
    })

    result.data.posts.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {},
      })
    })
  })
}
