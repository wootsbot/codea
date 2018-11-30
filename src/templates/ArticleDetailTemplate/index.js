import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Grid from '@material-ui/core/Grid'

import Layout from 'components/Layout'
import ArticleDetailsOverview from 'components/ArticleDetailsOverview'

import styles from './styles.module.scss'

function ArticleDetailTemplate({ data, location }) {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout
      marginTop
      title={frontmatter.title}
      location={location}
      metaTwitter={{ creator: frontmatter.author.twitter }}
      descriptionContent={excerpt}>
      <Grid
        className={styles.detailContainer}
        container
        alignItems="center"
        direction="column">
        <Grid item xl={5} lg={6} sm={12} xs={12}>
          <ArticleDetailsOverview
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
  location: PropTypes.object,
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author {
          id
          bio
          firstName
          lastName
          twitter
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
