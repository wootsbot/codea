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

  const templateTagsArchive = path.resolve(
    `src/templates/TemplateTagsArchive/index.js`
  )
  const templateArticleDetail = path.resolve(
    `src/templates/TemplateArticleDetail/index.js`
  )
  const templateArticlesList = path.resolve(
    `src/templates/TemplateArticlesList/index.js`
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
            web
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
      pageTemplate: templateArticlesList,
      pageLength: 9,
      pathPrefix: '/articles',
      buildPath: (index, pathPrefix) =>
        index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`,
      context: {
        tags: listTags,
      },
    })

    // Make pages detail article
    listArticles.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: templateArticleDetail,
        context: {},
      })
    })

    // Make tag pages
    listTags.forEach(tag => {
      createPage({
        path: `/archive-tags/${_.kebabCase(tag.node.id)}/`,
        component: templateTagsArchive,
        context: {
          tag: tag.node.id,
          tagContend: tag.node,
        },
      })
    })
  })
}
