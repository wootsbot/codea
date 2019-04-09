import React from 'react'
import PropTypes from 'prop-types'

import { graphql, Link } from 'gatsby'

import Img from 'gatsby-image'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'

import IconNook from '@material-ui/icons/BookTwoTone'

import Layout from 'components/Layout'
import DateFormat from 'components/DateFormat'

import styles from './styles.module.scss'

// temporals
import nodejs from 'images/svg/languages/nodejs.svg'
import jest from 'images/svg/languages/jest.svg'
import reactjs from 'images/svg/languages/reactjs.svg'

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

    const { authorYaml: contributor, allMarkdownRemark } = data
    const articles = allMarkdownRemark.edges

    return (
      <Layout marginTop footer={false}>
        <div className={styles.contributors}>
          <div className={styles.contributorsUser}>
            <div className={styles.contributorsUserAvatarContainer}>
              <Img
                alt="avatar author"
                className={styles.contributorsUserAvatar}
                fixed={contributor.avatar.childImageSharp.fixed}
              />
            </div>

            <div className={styles.contributorsUserDetails}>
              <Typography component="h1" variant="h5" gutterBottom>
                {`@${contributor.id}`}
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                {`${contributor.firstName} ${contributor.lastName}`}
              </Typography>

              <Typography variant="caption" gutterBottom>
                {contributor.bioFull}
              </Typography>
            </div>
          </div>

          <div className={styles.contributorsLanguages}>
            <div className={styles.contributorsLanguagesLanguage}>
              <img
                src={nodejs}
                alt=""
                className={styles.contributorsLanguagesLanguageIcon}
              />

              <Typography
                variant="h6"
                className={styles.contributorsLanguagesLanguageText}>
                nodejs
              </Typography>
            </div>

            <div className={styles.contributorsLanguagesLanguage}>
              <img
                src={jest}
                alt=""
                className={styles.contributorsLanguagesLanguageIcon}
              />

              <Typography
                variant="h6"
                className={styles.contributorsLanguagesLanguageText}>
                jest
              </Typography>
            </div>

            <div className={styles.contributorsLanguagesLanguage}>
              <img
                src={reactjs}
                alt=""
                className={styles.contributorsLanguagesLanguageIcon}
              />

              <Typography
                variant="h6"
                className={styles.contributorsLanguagesLanguageText}>
                reactjs
              </Typography>
            </div>
          </div>

          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="primary"
            variant="fullWidth"
            className={styles.contributorsTabs}>
            <Tab label="Articulos" />
            <Tab label="Historias" />
            <Tab label="Otros" />
          </Tabs>

          {value === 0 && (
            <Paper elevation={2} className={styles.tabContainer}>
              <List>
                {articles.map(article => {
                  if (article.node.frontmatter.author) {
                    if (article.node.frontmatter.author.id === contributor.id) {
                      return (
                        <React.Fragment key={article.node.fields.slug}>
                          <ListItem alignItems="flex-start">
                            <ListItemIcon>
                              <IconNook />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <div className={styles.tabArticleLinkContainer}>
                                  <Link to={article.node.fields.slug}>
                                    {article.node.frontmatter.title}
                                  </Link>

                                  <Typography
                                    component="time"
                                    variant="caption"
                                    color="textSecondary">
                                    <DateFormat
                                      date={
                                        article.node.frontmatter
                                          .latestUpdateDate
                                      }
                                      format="ll"
                                    />
                                  </Typography>
                                </div>
                              }
                              secondary={article.node.excerpt}
                            />
                          </ListItem>
                          <Divider />
                        </React.Fragment>
                      )
                    }
                  }
                  return null
                })}
              </List>
            </Paper>
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
      avatar {
        childImageSharp {
          fixed(width: 150, height: 150, quality: 100) {
            tracedSVG
            width
            height
            src
            srcSet
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
