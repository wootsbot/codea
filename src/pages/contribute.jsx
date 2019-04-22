import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'

import Layout from 'components/Layout'

import styles from './contribute.module.scss'

import ImageBanner from 'images/svg/banner-contribute.svg'
import ImagePullRequests from 'images/svg/pull-requests.svg'
import ImageBranch from 'images/svg/branch.svg'
import imgIdea from 'images/svg/idea-codea.svg'
import imgFileMd from 'images/svg/file-md-codea.svg'
import imgFileCode from 'images/svg/file-codea-code.svg'
import imgFork from 'images/svg/fork.svg'

const ContributePage = ({
  data: {
    site: { siteMetadata },
  },
}) => (
  <Layout
    marginTop
    title={`${siteMetadata.title}: Contribuye`}
    descriptionContent={siteMetadata.description}>
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.rowItemContributionHeader}>
          <Typography component="h1" variant="h3" gutterBottom>
            ¿Cómo contribuir?
          </Typography>

          <Typography component="p" variant="body1" gutterBottom>
            Codea utiliza Gatsby, que es un generador de sitios estáticos con
            React y Markdown, un lenguaje que permite usar una notación más
            compacta que HTML sin perder.
          </Typography>

          <Typography component="p" variant="body1" gutterBottom>
            Todo el código del sitio está disponible en Github que es una
            plataforma para gestión de proyectos basada en Git, un sistema de
            control de archivos.
          </Typography>

          <Typography component="p" variant="body1" gutterBottom>
            Si todo esto es nuevo para ti no te preocupes, en los artículos
            podrás encontrar información al respecto pero por el momento, aquí
            está una guía rápida para que puedas contribuir.
          </Typography>
        </div>

        <div className={styles.rowItemContributionMedia}>
          <img src={ImageBanner} alt="" />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.rowItemRepositories}>
          <Typography component="h1" variant="h3" gutterBottom>
            ¿Qué es un repositorio?
          </Typography>

          <Typography component="p" variant="body1" gutterBottom>
            Git utiliza los repositorios para mantener el control de las
            versionesde de los archivos que son parte de un proyecto.
          </Typography>

          <Typography component="p" variant="body1" gutterBottom>
            está en nuestros planes escribir una guía más detallada del uso de
            Git, pero por el momento podemos decirte que es un tipo de índice
            que dice quién ha hecho cambios y qué cambios hizo. Es una forma de
            permitir proyectos colaborativos y evitar, o reducir, problemas de
            colisión y alteración simultánea de contenido.
          </Typography>

          <Typography component="p" variant="body1" gutterBottom>
            Creemos que los siguientes{' '}
            <a
              href="https://git-scm.com/book/es/v1/Fundamentos-de-Git-Trabajando-con-repositorios-remotos"
              target="_blank"
              rel="noopener noreferrer"
              title="Temas git">
              temas
            </a>{' '}
            son basicos para empezar a colovorar.
          </Typography>

          <ul className={styles.listGitFundamentals}>
            <li>Mostrando tus repositorios remotos</li>
            <li>Añadiendo repositorios remotos</li>
            <li>Recibiendo de tus repositorios remotos</li>
            <li>Enviando a tus repositorios remotos</li>
            <li>Inspeccionando un repositorio remoto</li>
            <li>Eliminando y renombrando repositorios remotos</li>
          </ul>
        </div>
      </div>

      <div className={clsx(styles.row, styles.rowItemPullRequest)}>
        <div className={styles.rowItemPullRequestHeader}>
          <Typography component="h1" variant="h3" gutterBottom>
            ¿Qué es un Pull Request?
          </Typography>

          <Typography component="p" variant="body1" gutterBottom>
            En Git se parte de que el repositorio existe en local, tu
            computadora, y en remoto, un servidor.
          </Typography>

          <Typography component="p" variant="body1" gutterBottom>
            Y se usa una terminología común para referirse a la transferencia
            entre los dos entornos.
          </Typography>
        </div>

        <div className={styles.rowItemPullRequestBody}>
          <Typography component="p" variant="body1" gutterBottom>
            Hacer pull es obtener una versión remota, y hacer push es enviar la
            versión local, el repositorio que se encuentra en github es manejado
            por nosotros y está ligado a la versión en línea del sitio, aunque
            confiemos en la gente, es peligroso que cualquiera pueda actualizar
            el contenido y modificar el sitio sin una validación por parte del
            equipo.
          </Typography>
        </div>

        <div className={styles.rowItemPullRequestMedia}>
          <img src={ImagePullRequests} alt="" className={styles.imgFull} />
        </div>

        <div className={styles.rowItemPullRequestFooter}>
          <Typography component="p" variant="body1" gutterBottom>
            Para poder modificar el contenido necesitas hacer un fork, es decir,
            copiar el repositorio a tu cuenta de Github, para trabajar en él y
            una vez listo tienes que abrir un Pull Request en el repositorio de
            codea para que podamos aceptar tu contenido en nuestro repositorio
            (en este caso tu contenido es nuestro remoto, al aceptar el Pull
            Request iremos a tu repositorio por el código para integrarlo en el
            nuestro).
          </Typography>
        </div>
      </div>

      <div className={clsx(styles.row, styles.rowItemPullRequest)}>
        <div className={styles.rowItemPullRequestHeader}>
          <Typography component="h1" variant="h3" gutterBottom>
            ¿Qué es una branch?
          </Typography>
        </div>

        <div className={styles.rowItemPullRequestBody}>
          <Typography component="p" variant="body1" gutterBottom>
            Mucha gente puede trabajar en distintas partes del código al mismo
            tiempo, las branches son versiones diferentes del código pero que
            están interconectadas al pensar que temporalmente pertenecen todas
            aun árbol y se van dividiendo como las ramas que parten de un único
            tronco, de ahí su nombre.
          </Typography>
        </div>

        <div className={styles.rowItemPullRequestMedia}>
          <img src={ImageBranch} alt="" className={styles.imgFull} />
        </div>
      </div>

      <div className={clsx(styles.row, styles.rowItemPullRequest)}>
        <div className={styles.rowItemPullRequestHeader}>
          <Typography component="h1" variant="h3" gutterBottom>
            ¿Cómo escribir un artículo?
          </Typography>
        </div>

        <div className={styles.rowItemPullRequestBody}>
          <Typography component="p" variant="body1" gutterBottom>
            Eres libre de elegir el tema que quieras, aquí sólo hablaremos
            respecto a la parte técnica. Los artículos se encuentran en el
            directorio /docs/markdown a partir de la raíz de nuestro
            repositorio, es necesario crear un nuevo directorio con la fecha y
            el nombre del archivo, sin espacios o caracteres especiales y
            separado por guiones. Dentro de este directorio crear un archivo
            llamado index.md, ahí es donde podrás escribir el contenido de tu
            artículo para que se genere dentro de Codea. Estamos trabajando en
            guías más detalladas, pero por el momento te recomendamos ver los
            artículos que ya existen.
          </Typography>
        </div>

        <div className={styles.rowItemPullRequestMedia}>
          <img src={ImageBranch} alt="" className={styles.imgFull} />
        </div>
      </div>

      <div className={clsx(styles.row, styles.rowItemPullRequest)}>
        <div className={styles.rowItemPullRequestHeader}>
          <Typography component="h1" variant="h3" gutterBottom>
            ¿Qué otros detalles son importantes?
          </Typography>
        </div>

        <div className={styles.rowItemPullRequestBody}>
          <Typography component="p" variant="body1" gutterBottom>
            En author.yaml tienes que agregar tu información si es la primera
            vez que escribes, en avatars puedes subir una imagen para que
            aparezca en tu perfil y en src/data/tags.yaml es necesario agregar
            los tags si es la primera vez que los usas.
          </Typography>
        </div>

        <div className={styles.rowItemPullRequestMedia}>
          <img src={ImageBranch} alt="" className={styles.imgFull} />
        </div>
      </div>

      <div className={clsx(styles.row, styles.rowItemPullRequest)}>
        <div className={styles.rowItemPullRequestHeader}>
          <Typography component="h1" variant="h3" gutterBottom>
            Resumen
          </Typography>
        </div>

        <div className={styles.rowItemPullRequestBody}>
          <Typography component="p" variant="body1" gutterBottom>
            Primero es necesario tener la idea de un artículo, después tienes
            que hacer un fork de codea, crear tu código en un archivo llamado
            index.md dentro de <code>docs/markdown</code> y agregar el autor y
            los tags correspondientes. Finalmente tienes que esperar a que tu PR
            (Pull Request) sea aceptado, es posible que te hagamos algunas
            sugerencias de estilo o cambios.
          </Typography>
        </div>

        <div className={styles.rowItemPullRequestMedia}>
          <img src={ImageBranch} alt="" className={styles.imgFull} />
        </div>
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryTitle}>
          <Typography component="h1" variant="h3" gutterBottom>
            Los simples pasos para crear tu articulo
          </Typography>
        </div>

        <div className={styles.row}>
          <div className={styles.summaryRow}>
            <div className={styles.summaryContainer}>
              <div className={styles.summaryItem}>
                <img src={imgIdea} alt="" />

                <Typography component="h3" variant="title" gutterBottom>
                  Idea
                </Typography>

                <Typography component="h3" variant="body1" gutterBottom>
                  Empesemos por tener una idea del articulo que deceas crear
                </Typography>
              </div>

              <div className={styles.summaryItem}>
                <img src={imgFork} alt="" />

                <Typography component="h3" variant="title" gutterBottom>
                  Fork
                </Typography>

                <Typography component="h3" variant="body1" gutterBottom>
                  No olvides que tines que realizar un fork del repositorio de
                  codea
                </Typography>
              </div>

              <div className={styles.summaryItem}>
                <img src={imgFileMd} alt="" />

                <Typography component="h3" variant="title" gutterBottom>
                  Plantilla
                </Typography>

                <Typography component="h3" variant="body1" gutterBottom>
                  Puedes revisar la la plantilla que esta en{' '}
                  <code>docs/markdown/plantilla</code>
                </Typography>
              </div>

              <div className={styles.summaryItem}>
                <img src={imgFileCode} alt="" />

                <Typography component="h3" variant="title" gutterBottom>
                  crear tu código
                </Typography>

                <Typography component="h3" variant="body1" gutterBottom>
                  Finalmente tienes que esperar a que tu PR (Pull Request) sea
                  aceptado
                </Typography>
              </div>

              <div className={styles.summaryItem}>
                <img src={imgFileCode} alt="" />

                <Typography component="h3" variant="title" gutterBottom>
                  crear tu código
                </Typography>

                <Typography component="h3" variant="body1" gutterBottom>
                  es posible que te hagamos algunas sugerencias de estilo o
                  cambios.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

ContributePage.propTypes = {
  data: PropTypes.object,
}

export default ContributePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
