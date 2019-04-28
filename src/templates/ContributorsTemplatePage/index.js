import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import Contributor from 'components/Contributor'

import ArticlesList from './ArticlesList'
import styles from './styles.module.scss'

class ContributorsTemplatePage extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  render() {
    const { data } = this.props
    const { authorYaml: contributor, allMarkdownRemark } = data
    const articles = allMarkdownRemark.edges

    return (
      <Layout marginTop footer={false}>
        <div className={styles.contributors}>
          <Contributor contributor={contributor} />

          <div className={styles.articlesRow}>
            <ArticlesList articles={articles} contributorId={contributor.id} />
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    authorYaml(id: { eq: $slug }) {
      id
      firstName
      lastName
      bioFull
      bio
      location
      work
      education
      registry
      linkedin
      twitter
      github
      gitLab
      bitbucket
      stackoverflow
      avatar {
        childImageSharp {
          fixed(width: 230, height: 230, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___latestUpdateDate] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 150)
          frontmatter {
            date
            latestUpdateDate
            title
            tags
            author {
              id
              firstName
              lastName
              avatar {
                childImageSharp {
                  fixed(quality: 100, width: 55, height: 55) {
                    tracedSVG
                    width
                    height
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ContributorsTemplatePage
