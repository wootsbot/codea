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
    const { group, index, first, last, pageCount, pathPrefix } = pageContext

    const previousUrl =
      index - 1 == 1 ? pathPrefix : `${pathPrefix}/${(index - 1).toString()}`
    const nextUrl = `${pathPrefix}/${(index + 1).toString()}`

    const Posts = group.filter(edge => !!edge.node.frontmatter.date)

    return (
      <Layout
        sizePadding="sm"
        title="Lista de Articulos"
        meta={{ description: 'Lista de Pots', keywords: 'javascript, blog' }}>
        <Grid container justify="center">
          <Grid
            item
            container
            direction="row"
            xl={9}
            lg={9}
            md={12}
            sm={12}
            xs={12}>
            <TagLinkList />
          </Grid>
        </Grid>

        <PostLinkList posts={Posts} />

        <Grid container justify="center">
          <Grid item xl={9} lg={9} md={12} sm={12} xs={12}>
            <PaginationToPosts
              last={last}
              first={first}
              baseUrl={pathPrefix}
              pageCount={pageCount}
              pageIndex={index}
              previousUrl={previousUrl}
              nextUrl={nextUrl}
            />
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export default PaginatePosts
