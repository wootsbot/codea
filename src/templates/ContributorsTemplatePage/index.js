import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

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

    const {
      authorYaml: contributor,
      allMarkdownRemark,
      allLanguagesYaml,
    } = data
    const articles = allMarkdownRemark.edges
    const languages = allLanguagesYaml.edges

    return (
      <Layout marginTop footer={false}>
        <div className={styles.contributors}>
          <Contributor contributor={contributor} />

          <div className={styles.articlesRow}>
            <div className={styles.articlesRowSkills}>
              <Paper className={styles.skills}>
                {languages.map(({ node }) => (
                  <div key={node.id} className={styles.skillsSkill}>
                    <Img
                      alt="avatar author"
                      fixed={node.image.childImageSharp.fixed}
                      className={styles.skillsSkillImage}
                    />

                    <Typography variant="h6" color="textSecondary" gutterBottom>
                      {node.name}
                    </Typography>
                  </div>
                ))}
              </Paper>
            </div>

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
      email
      location
      work
      education
      date
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

    allLanguagesYaml(filter: { writeAuthors: { eq: $slug } }) {
      edges {
        node {
          id
          name
          image {
            childImageSharp {
              fixed(width: 20, height: 20, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
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
