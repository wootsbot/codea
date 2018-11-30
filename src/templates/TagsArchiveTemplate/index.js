import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Grid from '@material-ui/core/Grid'

import Layout from 'components/Layout'
import TagOverview from 'components/TagOverview'

const TagsArchiveTemplate = ({ pageContext, data }) => {
  const { tag, tagContend } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout
      footer={false}
      marginTop
      title={tag}
      descriptionContent={tagContend.description}>
      <Grid container justify="center">
        <Grid container item md={6} justify="center">
          <Grid item md={12}>
            <TagOverview
              tag={tag}
              tagContend={tagContend}
              articles={edges}
              totalCount={totalCount}
            />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

TagsArchiveTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.array,
    }),
  }),
}

export default TagsArchiveTemplate

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
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
