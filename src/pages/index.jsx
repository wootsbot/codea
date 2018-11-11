import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import { graphql } from 'gatsby'

import { UndrawBackInTheDay } from 'react-undraw-illustrations'

import Layout from 'components/Layout'
import Terminal from 'components/Terminal'
import DevelopersList from 'components/DevelopersList'
import HomePageSectionWelcome from 'components/HomePageSectionWelcome'

import styles from './index.module.scss'

class IndexPage extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  render() {
    const { data } = this.props
    const edgesBannerImage = data.bannerImage.edges
    const [srcBannerImg] = edgesBannerImage
    const imageBannerSrc = srcBannerImg.node.fixed.src
    const edgesDevelopers = data.developers.edges

    return (
      <Layout
        marginTop
        title="Codea"
        meta={{
          description: 'Un proyecto de código abierto y disponible para todos',
          keywords: 'codea',
        }}>
        <section
          style={{ backgroundImage: `url(${imageBannerSrc})` }}
          className={styles.sectionHome}>
          <div className={styles.sectionHomeText}>
            <h1 className={styles.sectionHomeTextTitle}>
              Un proyecto de código abierto y disponible para todos
            </h1>

            <p className={styles.sectionHomeTextMessage}>
              Si te encanta compartir conocimiento a través de proyectos de
              código abierto, libros etc. Hemos decidido crear este proyecto
              para cualquier persona que quiera colaborar.
            </p>
          </div>

          <div className={styles.sectionHomeCode}>
            <div className={styles.termContainer}>
              <Terminal>
                <Terminal.Code>yarn add codea</Terminal.Code>
                <Terminal.Code>https://codea.com.mx</Terminal.Code>
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
          alignItems="center">
          <Grid item md={3} sm={12}>
            <UndrawBackInTheDay primaryColor="#39d996" height="250px" />
          </Grid>
          <Grid item md={4} sm={12} className={styles.sectionCodingText}>
            <h2 className={styles.sectionCodingRightTitle}>
              Siéntete libre de aportar lo que quieras.
            </h2>
            <p className={styles.sectionCodingRightMessage}>
              Codea unn sitio desarrollado con{' '}
              <a
                rel="noopener noreferrer"
                alt="Gatsby"
                target="_blank"
                href="https://www.gatsbyjs.org/">
                Gatsby
              </a>{' '}
              que está pensado para cualquier desarrollador que quiera compartir
              sus experiencias con código, desde como soluciono un problema,
              hasta crear un artículo sobre cualquier lenguaje de programación,
              totalmente en español.
            </p>
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
    bannerImage: allImageSharp(
      filter: {
        fixed: { originalName: { eq: "banner_codea_fond_default.png" } }
      }
    ) {
      edges {
        node {
          id
          fixed(width: 1920, height: 414, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }

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
  }
`
