import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import PostDetailsOverview from 'components/PostDetailsOverview'
import PostLink from 'components/PostLink'

import styles from './blogDetailsOverviewTemplate.module.scss'

function BlogDetailsOverviewTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt } = markdownRemark

  console.log(data.filterPostTags.edges)

  const FilterPostsTags =
    data.filterPostTags &&
    data.filterPostTags.edges.filter(
      edge => edge.node.frontmatter.path != frontmatter.path
    )

  return (
    <Layout
      title={frontmatter.title}
      meta={{ description: excerpt, keywords: 'javascript, blog' }}>
      <Grid container alignItems="center" direction="column" justify="center">
        <Grid item xl={5} lg={6} sm={12} xs={12}>
          <PostDetailsOverview
            title={frontmatter.title}
            date={frontmatter.date}
            html={{ __html: html }}
          />
        </Grid>
      </Grid>

      {FilterPostsTags && (
        <Grid
          className={styles.suggestions}
          container
          direction="column"
          alignItems="center">
          <Grid
            item
            xl={8}
            lg={8}
            md={12}
            sm={12}
            xs={12}
            container
            justify="center"
            direction="row">
            {FilterPostsTags.map(post => (
              <Grid
                key={post.node.id}
                item
                xl={3}
                lg={4}
                md={4}
                sm={12}
                xs={12}>
                <PostLink post={post.node} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Layout>
  )
}

BlogDetailsOverviewTemplate.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query($path: String!, $tag: String, $limitFilterTags: Int) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }

    filterPostTags: allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tag } } }
      limit: $limitFilterTags
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`
export default BlogDetailsOverviewTemplate
