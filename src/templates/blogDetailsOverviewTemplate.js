import React from 'react'
import Grid from '@material-ui/core/Grid'

import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import PostDetailsOverview from 'components/PostDetailsOverview'

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, excerpt } = markdownRemark

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
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
