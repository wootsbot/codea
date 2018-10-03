import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import { graphql } from 'gatsby'

import { getPostsFilterTags } from 'utils/posts'

import Layout from 'components/Layout'
import PostDetailsOverview from 'components/PostDetailsOverview'
import SuggestionLink from 'components/SuggestionLink'

import styles from './blogDetailsOverviewTemplate.module.scss'

function BlogDetailsOverviewTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout
      title={frontmatter.title}
      meta={{ description: excerpt, keywords: 'javascript, blog' }}>
      <Grid
        className={styles.detailContainer}
        container
        alignItems="center"
        direction="column"
        justify="center">
        <Grid item xl={5} lg={6} sm={12} xs={12}>
          <PostDetailsOverview
            title={frontmatter.title}
            date={frontmatter.date}
            author={frontmatter.author}
            html={{ __html: html }}
          />
        </Grid>
      </Grid>

      <Grid
        className={styles.detailContainer}
        container
        alignItems="center"
        direction="column"
        justify="center">
        {getPostsFilterTags(data.filterPostTags, frontmatter.path).map(post => (
          <SuggestionLink key={post.node.id} to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </SuggestionLink>
        ))}
      </Grid>
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
        author {
          id
          bio
          firstName
          lastName
          avatar {
            childImageSharp {
              fixed(width: 50, height: 50) {
                src
              }
            }
          }
        }
      }
    }

    filterPostTags: allMarkdownRemark(
      filter: { frontmatter: { tags: { eq: $tag } } }
      limit: $limitFilterTags
      sort: { fields: [frontmatter___date] }
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
