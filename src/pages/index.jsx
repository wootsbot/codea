import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { UndrawOrganizingProjects } from 'react-undraw-illustrations'

import Layout from 'components/Layout'
import HeroHome from 'components/HeroHome'
import DevelopersList from 'components/DevelopersList'
import WelcomePrHome from 'components/WelcomePrHome'

import styles from './index.module.scss'

class IndexPage extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  render() {
    const { data } = this.props
    const edgesDevelopers = data.developers.edges
    const { siteMetadata } = data.site

    return (
      <Layout
        marginTop
        title={`${siteMetadata.title}`}
        descriptionContent={siteMetadata.description}>
        <HeroHome />

        <WelcomePrHome />

        <Grid
          component="section"
          className={styles.sectionCoding}
          container
          direction="row"
          justify="space-evenly"
          alignItems="center">
          <Grid item md={3} sm={12}>
            <UndrawOrganizingProjects primaryColor="#39d996" height="250px" />
          </Grid>
          <Grid item md={4} sm={12} className={styles.sectionCodingText}>
            <Typography component="h2" variant="h3" gutterBottom>
              ¿Qué es codea ?
            </Typography>

            <Typography component="p" variant="body1" gutterBottom align="left">
              Codea es un proyecto que nace para poder compartir libremente
              experiencias con desarrollo de software, desde cómo solucionaste
              un problema hasta crear artículos de cualquier lenguaje totalmente
              en español
            </Typography>
          </Grid>
        </Grid>
        <DevelopersList developers={edgesDevelopers} />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    developers: allDevelopersYaml {
      edges {
        node {
          id
          firstName
          lastName
          bio
          location
          codeRole
          avatar {
            childImageSharp {
              fixed(width: 70, height: 70, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
