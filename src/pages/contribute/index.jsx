import React from 'react'
import PropTypes from 'prop-types'

import { graphql } from 'gatsby'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'

import Layout from 'components/Layout'

import imageFork from 'images/svg/fork.svg'
import imageBranch from 'images/svg/branches-page.png'
import imageIdea from 'images/svg/idea-codea.svg'
import imageFileMd from 'images/svg/file-md-codea.svg'
import imageCommentsIcon from 'images/svg/comments-icon.svg'
import imageBanner from 'images/svg/banner-contribute.svg'
import imageMergeRequests from 'images/svg/merge-requests-page.png'
import imageMergeRequestsIcon from 'images/svg/merge-requests-icon.svg'

import styles from './styles.module.scss'

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
        <div className={styles.contributionHeader}>
          <Typography
            id="como-contribuir"
            component="h1"
            variant="h2"
            gutterBottom>
            ¿Cómo contribuir?
          </Typography>

          <Typography component="p" variant="subtitle1">
            Codea utiliza Gatsby, el cual es un generador de sitios web
            estáticos.
          </Typography>

          <Typography component="p" variant="subtitle1">
            Ahora bien, existen dos formas de contribuir:
          </Typography>

          <ul className={styles.listGitFundamentals}>
            <li>Creando contenido</li>
            <li>Agregando nuevas secciones al sitio web</li>
          </ul>
        </div>

        <div className={styles.contributionMedia}>
          <img src={imageBanner} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.itemBody}>
          <Typography component="p" variant="subtitle1">
            Sugerimos empezar compartiendo tus experiencias en el mundo de la
            computatión.
          </Typography>
        </div>
      </div>

      <div className={styles.summary}>
        <div className={styles.summaryTitle}>
          <Typography id="primer-articulo" component="h2" variant="h3">
            Crea tu primer artículo
          </Typography>
        </div>
        <div className={styles.row}>
          <div className={styles.summaryRow}>
            <div className={styles.summaryContainer}>
              <div className={styles.summaryItem}>
                <img src={imageIdea} />

                <Typography component="h3" variant="h6" gutterBottom>
                  Idea
                </Typography>

                <Typography variant="body2">¿Qué deseas compartir?</Typography>
              </div>
              <div className={styles.summaryItem}>
                <img src={imageFork} />

                <Typography component="h3" variant="h6" gutterBottom>
                  Fork
                </Typography>

                <Typography variant="body1">
                  Crea un fork del repositorio de Codea
                </Typography>
              </div>

              <div className={styles.summaryItem}>
                <img src={imageFileMd} />

                <Typography component="h3" variant="h6" gutterBottom>
                  Plantilla
                </Typography>

                <Typography variant="body1">
                  Puedes revisar la plantilla que está en{' '}
                  <code>docs/markdown/plantilla/</code>
                </Typography>
              </div>

              <div className={styles.summaryItem}>
                <img src={imageFileMd} />

                <Typography component="h3" variant="h6" gutterBottom>
                  Escribir artículo
                </Typography>

                <Typography variant="body1">
                  En un archivo llamado <code>index.md</code> dentro de{' '}
                  <code>docs/markdown/[fecha]-[nombre-del-articulo]/</code>
                </Typography>
              </div>

              <div className={styles.summaryItem}>
                <img src={imageMergeRequestsIcon} />

                <Typography component="h3" variant="h6" gutterBottom>
                  Merge Request
                </Typography>

                <Typography variant="body1">
                  Crea un MR (Merge Request) en gitlab y espera a que sea
                  aceptado
                </Typography>
              </div>

              <div className={styles.summaryItem}>
                <img src={imageCommentsIcon} />

                <Typography component="h3" variant="h6" gutterBottom>
                  Comentarios
                </Typography>

                <Typography variant="body1">
                  Sugerencias por parte de la comunidad
                </Typography>
              </div>
            </div>
            <Typography align="center" variant="h5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://gitlab.com/snippets/1859624">
                :)
              </a>
            </Typography>
          </div>
        </div>
      </div>

      <div className={clsx(styles.row, styles.single)}>
        <div className={styles.itemHeader}>
          <Typography component="h2" variant="h3">
            ¿Qué es un repositorio?
          </Typography>
        </div>

        <div className={styles.itemBody}>
          <Typography component="p" variant="subtitle1">
            Git utiliza los repositorios para mantener el control de las
            versiones de de los archivos que son parte de un proyecto.
          </Typography>
          <Typography component="p" variant="subtitle1">
            Está en nuestros planes escribir una guía más detallada del uso de
            Git, pero por el momento podemos decirte que es un tipo de índice
            que dice quién ha hecho cambios y qué cambios hizo. Es una forma de
            permitir proyectos colaborativos y evitar, o reducir problemas de
            colisión y alteración simultánea de contenido.
          </Typography>

          <Typography component="p" variant="subtitle1">
            Creemos que los siguientes{' '}
            <a
              href="https://git-scm.com/book/es/v1/Fundamentos-de-Git-Trabajando-con-repositorios-remotos"
              target="_blank"
              rel="noopener noreferrer"
              title="Temas git">
              temas
            </a>{' '}
            son básicos para empezar a colaborar:
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

      <div className={clsx(styles.row, styles.mergeRequest, styles.single)}>
        <div className={styles.mergeRequestHeader}>
          <Typography component="h2" variant="h3" gutterBottom>
            ¿Qué es un Merge Request?
          </Typography>

          <Typography component="p" variant="subtitle1">
            En Git se parte de que el repositorio existe en local, tu
            computadora, y en remoto, un servidor.
          </Typography>

          <Typography component="p" variant="subtitle1">
            Y se usa una terminología común para referirse a la transferencia
            entre los dos entornos.
          </Typography>
        </div>
        
        <div className={styles.mergeRequestBody}>
          <Typography component="p" variant="subtitle1">
            Hacer pull es obtener una versión remota, y hacer push es enviar la
            versión local, el repositorio que se encuentra en gitlab es manejado
            por nosotros y está ligado a la versión en línea del sitio. Aunque
            confiemos en la gente, es peligroso que cualquiera pueda actualizar
            el contenido y modificar el sitio sin una validación por parte del
            equipo.
          </Typography>
        </div>

        <div className={styles.mergeRequestMedia}>
          <img src={imageMergeRequests} className={styles.imageFull} />
        </div>

        <div className={styles.mergeRequestFooter}>
          <Typography component="p" variant="subtitle1">
            Para poder modificar el contenido necesitas hacer un fork, es decir,
            copiar el repositorio a tu cuenta de Gitlab, para trabajar en él y
            una vez listo tienes que abrir un Merge Request en el repositorio de
            codea para que podamos aceptar tu contenido en nuestro repositorio
            (en este caso tu contenido es nuestro remoto, al aceptar el Merge
            Request iremos a tu repositorio por el código para integrarlo en el
            nuestro).
          </Typography>
        </div>
      </div>

      <div className={clsx(styles.row, styles.branch, styles.single)}>
        <div className={styles.branchHeader}>
          <Typography component="h2" variant="h3" gutterBottom>
            ¿Qué es un branch?
          </Typography>
        </div>

        <div className={styles.branchMedia}>
          <img src={imageBranch} className={styles.imageFull} />
        </div>

        <div className={styles.branchBody}>
          <Typography component="p" variant="subtitle1">
            Muchos desarrolladores pueden trabajar en distintas partes del
            código al mismo tiempo, las branches son versiones diferentes del
            código pero que están interconectadas al pensar que temporalmente
            pertenecen todas a un árbol y se van dividiendo como las ramas que
            parten de un único tronco, de ahí su nombre.
          </Typography>
        </div>
      </div>

      <div className={clsx(styles.row, styles.single)}>
        <div className={styles.itemHeader}>
          <Typography component="h2" variant="h3" gutterBottom>
            ¿Cómo escribir un artículo?
          </Typography>
        </div>

        <div className={styles.itemBody}>
          <Typography component="p" variant="subtitle1">
            Eres libre de elegir el tema que quieras, aquí sólo hablaremos
            respecto a la parte técnica. Los artículos se encuentran en el
            directorio <code>docs/markdown/</code> a partir de la raíz de
            nuestro repositorio, es necesario crear un nuevo directorio con la
            fecha y el nombre del archivo, sin espacios o caracteres especiales
            y separado por guiones. Dentro de este directorio crear un archivo
            llamado <code>index.md</code>. En este último es donde podrás
            escribir el contenido de tu artículo.
          </Typography>
          <Typography component="p" variant="subtitle1">
            Estamos trabajando en guías más detalladas, pero por el momento te
            recomendamos ver los artículos que ya existen.
          </Typography>
        </div>
      </div>

      <div className={clsx(styles.row, styles.single)}>
        <div className={styles.itemHeader}>
          <Typography component="h2" variant="h3" gutterBottom>
            ¿Qué otros detalles son importantes?
          </Typography>
        </div>

        <div className={styles.itemBody}>
          <Typography component="p" variant="subtitle1">
            En <code>author.yaml</code> tienes que agregar tu información si es
            la primera vez que escribes, en <code>docs/authors/avatars/</code>{' '}
            puedes subir una imagen para que aparezca en tu perfil y en{' '}
            <code>src/data/tags.yaml</code> es necesario agregar los tags si es
            la primera vez que los usas y no aún existen.
          </Typography>
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
