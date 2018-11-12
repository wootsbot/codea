import React from 'react'
import PropTypes from 'prop-types'

import Layout from 'components/Layout'
import PaginationArticles from 'components/PaginationArticles'

import { paginationPreviousPage, paginationNextPage } from 'utils/paths'

import ArticlesList from './ArticlesList'

class ArticlesListTemplate extends React.PureComponent {
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

    const listTags = additionalContext.tags

    const Pagination = (
      <PaginationArticles
        last={last}
        first={first}
        baseUrl={pathPrefix}
        pageCount={pageCount}
        pageIndex={index}
        previousUrl={paginationPreviousPage(index, pathPrefix)}
        nextUrl={paginationNextPage(index, pathPrefix)}
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
          posts={group}
          listTags={listTags}
          pagination={Pagination}
        />
      </Layout>
    )
  }
}

export default ArticlesListTemplate
