import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import PostLinkList from 'components/PostLinkList'

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
        <PostLinkList posts={Posts} />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
    ) {
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
