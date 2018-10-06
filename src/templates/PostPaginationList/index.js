import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import Layout from 'components/Layout'
import PostLinkList from 'components/PostLinkList'
import TagLinkList from 'components/TagLinkList'
import PaginationToPosts from 'components/PaginationToPosts'

class PaginatePosts extends React.PureComponent {
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
      <PaginationToPosts
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
        title="Lista de Articulos"
        meta={{
          description: 'Lista de articulos',
          keywords: 'javascript, blog',
        }}>
        <PostLinkList
          posts={Posts}
          listTags={listTags}
          pagination={Pagination}
        />
      </Layout>
    )
  }
}

export default PaginatePosts
