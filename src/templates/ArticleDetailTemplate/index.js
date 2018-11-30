import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Grid from '@material-ui/core/Grid'

import Layout from 'components/Layout'
import ArticleDetailsOverview from 'components/ArticleDetailsOverview'

import styles from './styles.module.scss'

function ArticleDetailTemplate({ data, location }) {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt, timeToRead } = markdownRemark

  return (
    <Layout marginTop title={frontmatter.title} location={location}>
      <Helmet>
        <title>{frontmatter.title}</title>
        <link
          rel="author"
          href={`https://codea.com.mx/${frontmatter.author.id}`}
        />
        <meta
          name="description"
          content={frontmatter.excerpt ? frontmatter.excerpt : excerpt}
        />
        <meta property="og:description" content={excerpt} />
        <meta name="twitter:description" content={excerpt} />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:type" content="article" />
        <meta name="article:author" content={frontmatter.author.id} />
        <meta name="twitter:creator" content={frontmatter.author.twitter} />
        <meta name="author" content={frontmatter.author.id} />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content={`${timeToRead} min read`} />
        <meta name="article:published_time" content={frontmatter.date} />
      </Helmet>

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
      timeToRead
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
