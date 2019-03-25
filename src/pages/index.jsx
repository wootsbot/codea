import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TrendingFlatTwoTone from '@material-ui/icons/TrendingFlatTwoTone'

import SvgwhatCodea from 'images/svg/what_codea.svg'

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

        <Grid
          id="what-codea"
          component="section"
          className={styles.sectionWhatCodea}
          container
          direction="row"
          justify="space-around"
          alignItems="center">
          <Grid item md={3} sm={4}>
            <img
              src={SvgwhatCodea}
              alt="LOGO CODEA"
              className={styles.sectionWhatCodeaCover}
            />
          </Grid>

          <Grid item md={4} sm={12} className={styles.sectionWhatCodeaText}>
            <Typography component="h2" variant="h3" gutterBottom>
              ¿Qué es codea ?
            </Typography>

            <Typography
              component="p"
              variant="body1"
              gutterBottom
              color="textSecondary">
              Codea es un proyecto que nace para poder compartir libremente
              experiencias con desarrollo de software, desde cómo solucionaste
              un problema hasta crear artículos de cualquier lenguaje totalmente
              en español
            </Typography>

            <Link
              to="/articles/2018-11-16-que-es-codea"
              className={styles.sectionWhatCodeaMore}>
              Leer más de codea <TrendingFlatTwoTone />
            </Link>
          </Grid>
        </Grid>

        <DevelopersList developers={edgesDevelopers} />

        <WelcomePrHome />
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
              fixed(width: 55, height: 55, quality: 100) {
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
