import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import Terminal from 'components/Terminal'
import DevelopersList from 'components/DevelopersList'

import codingImg from 'static/images/svg/coding_codea.svg'

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
        <Grid
          className={styles.sectionWelcome}
          component="section"
          container
          direction="column"
          justify="center"
          alignItems="center">
          <Grid item md={6} sm={12}>
            <h2 className={styles.sectionWelcomeTitle}>
              ¿Estas listo para comenzar?
            </h2>
          </Grid>

          <Grid item md={6} sm={12}>
            <p className={styles.sectionWelcomeMessage}>
              Quizás ya tengas un artículo que quieras compartir, para eso
              siéntete libre de ir al repositorio de codea donde podrás crear
              tus pull requests y aportar con la comunidad.
            </p>
          </Grid>

          <Grid item md={6} sm={12}>
            <a
              className={styles.sectionWelcomeLinkStart}
              target="_blank"
              rel="noopener noreferrer"
              title="codea repository"
              href="https://github.com/codea-team">
              <Button
                className={styles.sectionWelcomeBtnStart}
                variant="extendedFab"
                color="secondary">
                Comenzar
              </Button>
            </a>
          </Grid>
        </Grid>

        <DevelopersList developers={edgesDevelopers} />

        <Grid
          component="section"
          className={styles.sectionCoding}
          container
          direction="row"
          justify="space-between"
          alignItems="center">
          <Grid item md={3} sm={12}>
            <img className={styles.imageCoding} src={codingImg} />
          </Grid>
          <Grid item md={8} sm={12}>
            <h2 className={styles.sectionCodingRightTitle}>
              CODEA UN SITO PARA LOS QUE AMAN COMPARTIR CONOCIMIENTO, SIÉNTETE
              LIBRE DE APORTAR LO QUE QUIERAS.
            </h2>
            <p className={styles.sectionCodingRightMessage}>
              Codea está desarrollado con Gatsby, está pensado para cualquier
              desarrollador que quiera compartir sus experiencias con código
              desde como soluciono un problema hasta crear un artículo sobre
              cualquier lenguaje de programación totalmente en español.
            </p>
          </Grid>
        </Grid>
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
