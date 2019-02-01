import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { UndrawOrganizingProjects } from 'react-undraw-illustrations'

import Layout from 'components/Layout'
import Terminal from 'components/Terminal'
import DevelopersList from 'components/DevelopersList'
import HomePageSectionWelcome from 'components/HomePageSectionWelcome'

import BannerCodea from 'images/svg/banner_codea_fond_default.svg'
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
        descriptionContent={siteMetadata.description}
      >
        <section
          style={{ backgroundImage: `url(${BannerCodea})` }}
          className={styles.sectionHome}
        >
          <div className={styles.sectionHomeText}>
            <Typography
              className={styles.sectionHomeTextTitle}
              color="secondary"
              component="h1"
              variant="h3"
              gutterBottom
            >
              Un proyecto de código abierto.
            </Typography>

            <Typography
              className={styles.sectionHomeTextMessage}
              variant="body1"
              gutterBottom
            >
              Si te encanta compartir conocimiento a través de proyectos de
              código abierto, libros etc. Hemos decidido crear este proyecto
              para cualquier persona que quiera colaborar.
            </Typography>
          </div>

          <div className={styles.sectionHomeCode}>
            <div className={styles.termContainer}>
              <Terminal>
                <Terminal.Code>https://www.codea.com.mx</Terminal.Code>
                <Terminal.Code>Open Source</Terminal.Code>
                <Terminal.Code>Share with Community</Terminal.Code>
              </Terminal>
            </div>
          </div>
        </section>

        <HomePageSectionWelcome />

        <Grid
          component="section"
          className={styles.sectionCoding}
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item md={3} sm={12}>
            <UndrawOrganizingProjects primaryColor="#39d996" height="250px" />
          </Grid>
          <Grid item md={4} sm={12} className={styles.sectionCodingText}>
            <Typography variant="h4" gutterBottom>
              Siéntete libre de aportar lo que quieras.
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              Codea un sitio desarrollado con{' '}
              <a
                rel="noopener noreferrer"
                alt="Gatsby"
                target="_blank"
                href="https://www.gatsbyjs.org/"
              >
                Gatsby
              </a>{' '}
              que está pensado para cualquier desarrollador que quiera compartir
              sus experiencias con código, desde como soluciono un problema,
              hasta crear un artículo sobre cualquier lenguaje de programación,
              totalmente en español.
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
