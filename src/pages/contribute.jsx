import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Layout from 'components/Layout'
import Question from 'components/Question'

import styles from './contribute.module.scss'

const questions = [
  {
    id: '1',
    title: '¿Cómo contribuir?',
    content: `Codea utiliza Gatsby, que es un generador de sitios estáticos con React y Markdown, un lenguaje que permite usar una notación más compacta que HTML sin perder. Todo el código del sitio está disponible en Github que es una plataforma para gestión de proyectos basada en Git, un sistema de control de archivos. Si todo esto es nuevo para ti no te preocupes, en los artículos podrás encontrar información al respecto pero por el momento, aquí está una guía rápida para que puedas contribuir.`,
  },
  {
    id: '2',
    title: '¿Qué es un repositorio?',
    content: `Git utiliza los repositorios para mantener el control de las versionesde los archivos que son parte de un proyecto, está en nuestros planes escribir una guía más detallada del uso de Git, pero por el momento podemos decirte que es un tipo de índice que dice quién ha hecho cambios y qué cambios hizo. Es una forma de permitir proyectos colaborativos y evitar, o reducir, problemas de colisión y alteración simultánea de contenido.`,
  },
  {
    id: '3',
    title: '¿Qué es un PullRequest?',
    content: `En Git se parte de que el repositorio existe en local, tu computadora, y en remoto, un servidor. Y se usa una terminología común para referirse a la transferencia entre los dos entornos. Hacer pull es obtener una versión remota, y hacer push es enviar la versión local, el repositorio que se encuentra en github es manejado por nosotros y está ligado a la versión en línea del sitio, aunque confiemos en la gente, es peligroso que cualquiera pueda actualizar el contenido y modificar el sitio sin una validación por parte del equipo. Para poder modificar el contenido necesitas hacer un fork, es decir, copiar el repositorio a tu cuenta de Github, para trabajar en él y una vez listo tienes que abrir un Pull Request en el repositorio de codea para que podamos aceptar tu contenido en nuestro repositorio (en este caso tu contenido es nuestro remoto, al aceptar el Pull Request iremos a tu repositorio por el código para integrarlo en el nuestro).`,
  },
  {
    id: '4',
    title: '¿Qué es una branch?',
    content: `Mucha gente puede trabajar en distintas partes del código al mismo tiempo, las branches son versiones diferentes del código pero que están interconectadas al pensar que temporalmente pertenecen todas aun árbol y se van dividiendo como las ramas que parten de un único tronco, de ahí su nombre.`,
  },
  {
    id: '5',
    title: '¿Cómo escribir un artículo?',
    content: `Eres libre de elegir el tema que quieras, aquí sólo hablaremos respecto a la parte técnica. Los artículos se encuentran en el directorio /docs/markdown a partir de la raíz de nuestro repositorio, es necesario crear un nuevo directorio con la fecha y el nombre del archivo, sin espacios o caracteres especiales y separado por guiones. Dentro de este directorio crear un archivo llamado index.md, ahí es donde podrás escribir el contenido de tu artículo para que se genere dentro de Codea. Estamos trabajando en guías más detalladas, pero por el momento te recomendamos ver los artículos que ya existen.`,
  },
  {
    id: '6',
    title: '¿Qué otros detalles son importantes?',
    content: `En author.yaml tienes que agregar tu información si es la primera vez que escribes, en avatars puedes subir una imagen para que aparezca en tu perfil y en src/data/tags.yaml es necesario agregar los tags si es la primera vez que los usas.`,
  },
  {
    id: '7',
    title: 'Resumen',
    content:
      'Primero es necesario tener la idea de un artículo, después tienes que hacer un fork de codea, crear tu código en un archivo llamado index.md dentro de docs/markdown y agregar el autor y los tags correspondientes. Finalmente tienes que esperar a que tu PR (Pull Request) sea aceptado, es posible que te hagamos algunas sugerencias de estilo o cambios.',
  },
]

const ContributePage = ({
  data: {
    site: { siteMetadata },
  },
}) => (
  <Layout
    marginTop
    title={`${siteMetadata.title}: Contribuye`}
    descriptionContent={siteMetadata.description}>
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid
        container
        item
        lg={8}
        direction="row"
        className={styles.contentContainer}>
        {questions.map(question => (
          <Question key={question.id} question={question} />
        ))}
      </Grid>
    </Grid>
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
