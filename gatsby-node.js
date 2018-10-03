const path = require('path')
const _ = require('lodash')
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
  const tagTemplate = path.resolve('src/templates/ArchiveTags/index.js')
  const PaginatedPageTemplate = path.resolve(
    `src/templates/PostPaginationList/index.js`
  )

  return graphql(`
    {
      posts: allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
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
                avatar {
                  childImageSharp {
                    fixed(width: 50, height: 50) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
      tags: allTagsYaml {
        edges {
          node {
            id
            description
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const postsList = result.data.posts.edges.reverse()
    const tagsList = result.data.tags.edges

    createPaginatedPages({
      edges: postsList,
      createPage: createPage,
      pageTemplate: PaginatedPageTemplate,
      pageLength: 10,
      pathPrefix: '/blog',
      buildPath: (index, pathPrefix) =>
        index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`,
      context: {
        tags: tagsList,
      },
    })

    postsList.forEach(({ node }) => {
      let tag = ''

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

    // Make tag pages
    tagsList.forEach(tag => {
      createPage({
        path: `/archive-tags/${_.kebabCase(tag.node.id)}/`,
        component: tagTemplate,
        context: {
          tag: tag.node.id,
        },
      })
    })
  })
}
