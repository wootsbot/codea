import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import Terminal from 'components/Terminal'

import styles from './index.module.scss'

class IndexPage extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  }

  render() {
    const { data } = this.props
    const { edges } = data.allImageSharp
    const [firstNode] = edges
    const imageSrc = firstNode.node.fixed.src

    return (
      <Layout
        title="Codea"
        meta={{
          description: 'Codea, un sitio web de javaScript',
          keywords: 'JavaScript, codea',
        }}>
        <section
          style={{ backgroundImage: `url(${imageSrc})` }}
          className={styles.sectionHome}>
          <div className={styles.sectionHomeText}>
            <h1 className={styles.sectionHomeTextTitle}>
              Un sitio de código abierto, siéntete libre de aportar con codea.
            </h1>

            <p className={styles.sectionHomeTextMessage}>
              Codea está desarrollado con Gatsby, está pensado para cualquier
              desarrollador que quiera compartir sus experiencias con código
              desde como soluciono un problema hasta crear un artículo sobre
              cualquier lenguaje de programación totalmente en español.
            </p>
          </div>

          <div className={styles.sectionHomeCode}>
            <div className={styles.termContainer}>
              <Terminal>
                <Terminal.Code>npm install -g codea</Terminal.Code>
                <Terminal.Code>https://codea.com.mx</Terminal.Code>
              </Terminal>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allImageSharp(
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
  }
`
