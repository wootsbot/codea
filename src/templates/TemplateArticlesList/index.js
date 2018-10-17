import React from 'react'
import PropTypes from 'prop-types'

import Layout from 'components/Layout'
import PaginationArticles from 'components/PaginationArticles'

import ArticlesList from './ArticlesList'

class TemplateArticlesList extends React.PureComponent {
  static propTypes = {
    pageContext: PropTypes.shape({
      group: PropTypes.array,
      index: PropTypes.number,
      first: PropTypes.bool,
      last: PropTypes.bool,
      pageCount: PropTypes.number,
      pathPrefix: PropTypes.string,
    }),
  }

  render() {
    const { pageContext } = this.props
    const {
      group,
      index,
      first,
      last,
      pageCount,
      pathPrefix,
      additionalContext,
    } = pageContext

    const previousUrl =
      index - 1 == 1 ? pathPrefix : `${pathPrefix}/${(index - 1).toString()}`

    const nextUrl = `${pathPrefix}/${(index + 1).toString()}`
    const listTags = additionalContext.tags

    const Posts = group.filter(edge => !!edge.node.frontmatter.date)

    const Pagination = (
      <PaginationArticles
        last={last}
        first={first}
        baseUrl={pathPrefix}
        pageCount={pageCount}
        pageIndex={index}
        previousUrl={previousUrl}
        nextUrl={nextUrl}
      />
    )

    return (
      <Layout
        marginTop
        title="Lista de Articulos"
        meta={{
          description: 'Lista de articulos',
          keywords: 'javascript, blog',
        }}>
        <ArticlesList
          posts={Posts}
          listTags={listTags}
          pagination={Pagination}
        />
      </Layout>
    )
  }
}

export default TemplateArticlesList
