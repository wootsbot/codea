import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Grid from '@material-ui/core/Grid'

import Layout from 'components/Layout'

import styles from './archiveTags.module.scss'

const ArchiveTags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount}  ${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  return (
    <Layout
      title="Archive | codea Tags"
      meta={{ description: 'Tags', keywords: 'javascript, blog' }}>
      <Grid container justify="center" className={styles.tags}>
        <Grid item container xl={8} lg={8} md={12} sm={12} xs={12}>
          <div className={styles.tagContainer}>
            <h2 className={styles.title}>Lista de articulos de:</h2>

            <div className={styles.tagsArticles}>
              <h3 className={styles.subTitle}>{tag}</h3>

              <ul className={styles.tagListPost}>
                {edges.map(({ node }) => {
                  const { path, title, date } = node.frontmatter
                  return (
                    <li key={path}>
                      <time>{date}</time>
                      <Link to={path}>{title}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </Layout>
  )
}

ArchiveTags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default ArchiveTags

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
