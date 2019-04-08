const path = require('path')
const parseFilepath = require(`parse-filepath`)

const _ = require('lodash')
const trimStart = require('lodash/trimStart')
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

exports.onCreateNode = ({ node, actions, getNode, reporter }) => {
  const { createNodeField } = actions
  const basePath = '/articles/'

  if (
      node.internal.type === `MarkdownRemark` &&
      getNode(node.parent).internal.type === 'File'
    ) {
    const fileNode = getNode(node.parent)
    const parsedFilePath = parseFilepath(fileNode.relativePath)
    let slug;

    if (fileNode.sourceInstanceName === 'docs') {
      if (parsedFilePath.name !== 'index') {
        slug = `${basePath}${parsedFilePath.name}`
      } else {
        slug = `${basePath}${trimStart(parsedFilePath.dir, 'markdown/')}`
      }

      if(slug) {
        createNodeField({ node, name: `slug`, value: slug })
      }
    }
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const TAGS_ARCHIVE_TEMPLATE = path.resolve(
    `src/templates/TagsArchiveTemplate/index.js`
  )
  const ARTICLE_OVERVIEW_TEMPLATE = path.resolve(
    `src/templates/ArticleOverviewTemplate/index.js`
  )
  const ARTICLES_LIST_TEMPLATE = path.resolve(
    `src/templates/ArticlesListTemplate/index.js`
  )

  return graphql(`
    {
      posts: allMarkdownRemark(sort: { fields: [frontmatter___latestUpdateDate] }) {
        edges {
          node {
            id
            fields {
              slug
            }
            excerpt(pruneLength: 200)
            frontmatter {
              date
              latestUpdateDate
              title
              tags
              author {
                id
                firstName
                lastName
                avatar {
                  childImageSharp {
                    fixed(quality: 100, width: 55, height: 55) {
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
      pageTemplate: ARTICLES_LIST_TEMPLATE,
      pageLength: 9,
      pathPrefix: '/articles/',
      buildPath: (index, pathPrefix) =>
        index > 1 ? `${pathPrefix}${index}` : `${pathPrefix}`,
      context: {
        tags: listTags,
      },
    })

    // Make pages detail article
    listArticles.forEach(({ node }) => {
      let slug = _.get(node, 'fields.slug')

      createPage({
        path: slug,
        component: ARTICLE_OVERVIEW_TEMPLATE,
        context: {
          slug,
        },
      })
    })

    // Make tag pages
    listTags.forEach(tag => {
      createPage({
        path: `/archive-tags/${_.kebabCase(tag.node.id)}/`,
        component: TAGS_ARCHIVE_TEMPLATE,
        context: {
          tag: tag.node.id,
          tagContend: tag.node,
        },
      })
    })
  })
}
