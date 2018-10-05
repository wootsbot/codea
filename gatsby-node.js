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

  const tagsTemplate = path.resolve(`src/templates/ArchiveTags/index.js`)

  const articleTemplate = path.resolve(
    `src/templates/BlogDetailsOverviewTemplate/index.js`
  )

  const listArticlesTemplate = path.resolve(
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
                    fixed(width: 40, height: 40) {
                      tracedSVG
                      width
                      height
                      src
                      srcSet
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

    const listArticles = result.data.posts.edges.reverse()
    const listTags = result.data.tags.edges

    createPaginatedPages({
      edges: listArticles,
      createPage: createPage,
      pageTemplate: listArticlesTemplate,
      pageLength: 10,
      pathPrefix: '/articles',
      buildPath: (index, pathPrefix) =>
        index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`,
      context: {
        tags: listTags,
      },
    })

    // Make pages detail article
    listArticles.forEach(({ node }) => {
      let tag = node.frontmatter.tags[0]

      createPage({
        path: node.frontmatter.path,
        component: articleTemplate,
        context: {
          tag,
          limitFilterTags: 4,
        },
      })
    })

    // Make tag pages
    listTags.forEach(tag => {
      createPage({
        path: `/archive-tags/${_.kebabCase(tag.node.id)}/`,
        component: tagsTemplate,
        context: {
          tag: tag.node.id,
        },
      })
    })
  })
}
