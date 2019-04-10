import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Layout from 'components/Layout'
import Contributor from 'components/Contributor'

import ArticlesList from './ArticlesList'
import styles from './styles.module.scss'

class ContributorsTemplatePage extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state
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
          <Contributor
            id={contributor.id}
            avatar={contributor.avatar.childImageSharp.fixed}
            fullName={`${contributor.firstName} ${contributor.lastName}`}
            bioFull={contributor.bioFull}
            bio={contributor.bio}
            languages={languages}
          />

          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="fullWidth"
            className={styles.contributorsTabs}>
            <Tab label="Articulos" />
            <Tab label="Historias" disabled />
            <Tab label="Otros" disabled />
          </Tabs>

          {value === 0 && (
            <ArticlesList articles={articles} contributorId={contributor.id} />
          )}
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
          excerpt(pruneLength: 200)
          frontmatter {
            latestUpdateDate
            title
            tags
            author {
              id
            }
          }
        }
      }
    }
  }
`

export default ContributorsTemplatePage
