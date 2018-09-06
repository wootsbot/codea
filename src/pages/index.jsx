import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Grid from '@material-ui/core/Grid'

import Layout from 'components/Layout'
import PostLinkList from 'components/PostLinkList'
import TagLinkList from 'components/TagLinkList'

class IndexPage extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }
  render() {
    const { data } = this.props
    const { edges } = data.allMarkdownRemark
    const Posts = edges.filter(edge => !!edge.node.frontmatter.date)

    return (
      <Layout
        sizePadding="sm"
        title="Codea"
        meta={{
          description: 'codea un blog de un buem programador',
          keywords: 'javascript, blog',
        }}>
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
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
