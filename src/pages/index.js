import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import PostLink from 'components/PostLink'
import Layout from 'pages/Layout'

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
        title="Codea"
        meta={{
          description: 'codea un blog de un buem programador',
          keywords: 'javascript, blog',
        }}>
        <Grid container alignItems="center" direction="column" justify="center">
          {Posts.map(post => (
            <Grid key={post.node.id} item lg={7} sm={12} xs={12}>
              <PostLink post={post.node} />
            </Grid>
          ))}
        </Grid>
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
          excerpt(pruneLength: 250)
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
