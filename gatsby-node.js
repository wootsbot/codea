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
    `src/templates/BlogDetailsOverviewTemplate/index.js`
  )

  const PaginatedPageTemplate = path.resolve(
    `src/templates/PostPaginationList/index.js`
  )

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
              tags
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
      let tag = 'Default'

      if (node.frontmatter.tags && node.frontmatter.tags.length) {
        tag = node.frontmatter.tags[0]
      }

      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          tag,
          limitFilterTags: 4,
        },
      })
    })
  })
}
