import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import PostDetailsOverview from 'components/PostDetailsOverview'

import styles from './ArticleDetail.module.scss'

function ArticleDetailTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout
      marginTop
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
    </Layout>
  )
}

ArticleDetailTemplate.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author {
          id
          bio
          firstName
          lastName
          avatar {
            childImageSharp {
              fixed(width: 32, height: 32) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
export default ArticleDetailTemplate
