import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import LinkTwoTone from '@material-ui/icons/LinkTwoTone'

import Layout from 'components/Layout'

import styles from './archiveTags.module.scss'

const ArchiveTags = ({ pageContext, data }) => {
  const { tag, tagContend } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  return (
    <Layout
      title="Archive | codea Tags"
      meta={{ description: 'Tags', keywords: 'javascript, blog' }}>
      <Grid container justify="center">
        <Grid container item md={6} justify="center">
          <Grid item md={12}>
            <Paper elevation={1} className={styles.containerTag}>
              <div className={styles.tagHeader}>
                <div className={styles.tagHeaderTitleContainer}>
                  <h1 className={styles.tagHeaderTitle}>{tag}</h1>
                  {tagContend.web && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      title={tag}
                      href={tagContend.web}>
                      <LinkTwoTone className={styles.tagHeaderLink} />
                    </a>
                  )}
                </div>

                <p className={styles.tagHeaderSummary}>
                  {tagContend.description}
                </p>
              </div>

              <div className={styles.tagSubHeading}>
                <h2 className={styles.tagSubHeadingTitle}>
                  Todos los articulos de {tag}
                </h2>
                <Chip
                  color="secondary"
                  variant="outlined"
                  label={`Total de articulos ${totalCount}`}
                />
              </div>

              <div>
                <ul className={styles.tagsList}>
                  {edges.map(({ node }) => {
                    const { path, title, date } = node.frontmatter
                    return (
                      <li key={path} className={styles.tagsListItem}>
                        <Link to={path}>{title}</Link>
                        <time className={styles.tagsListTime}>{date}</time>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Paper>
          </Grid>
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
