import React from 'react'
import Grid from '@material-ui/core/Grid'

import Layout from 'components/Layout'

import styles from './contribute.module.scss'

const ContributePage = ({ data: { site: { siteMetadata } } }) => (
  <Layout
    marginTop
    title={`${siteMetadata.title}`}
    descriptionContent={siteMetadata.description}
  >
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid
        container
        item
        lg={8}
        direction="row"
        className={styles.contentContainer}
      >
        <h1>¿Cómo contribuir?</h1>
        <p>Codea utiliza Gatsby, que es un generador de sitios estáticos con React y Markdown, un lenguaje que permite usar una notación más compacta que HTML sin perder. Todo el código del sitio está disponible en Github, <a href="https://github.com/codea-team/codea">aquí</a>, que es una plataforma para gestión de proyectos basada en Git, un sistema de control de archivos. Si todo esto es nuevo para ti no te preocupes, en los artículos podrás encontrar información al respecto pero por el momento, aquí está una guía rápida para que puedas contribuir.</p>
        <h2>¿Qué es un repositorio?</h2>
        <p>Git utiliza los repositorios para mantener el control de las versiones de los archivos que son parte de un proyecto, está en nuestros planes escribir una guía más detallada del uso de Git, pero por el momento podemos decirte que es un tipo de índice que dice quién ha hecho cambios y qué cambios hizo. Es una forma de permitir proyectos colaborativos y evitar, o reducir, problemas de colisión y alteración simultánea de contenido.</p>
        <h2>¿Qué es un PullRequest?</h2>
        <p>En Git se parte de que el repositorio existe en local, tu computadora, y en remoto, un servidor. Y se usa una terminología común para referirse a la transferencia entre los dos entornos. Hacer pull es obtener una versión remota, y hacer push es enviar la versión local, el repositorio que se encuentra en github es manejado por nosotros y está ligado a la versión en línea del sitio, aunque confiemos en la gente, es peligroso que cualquiera pueda actualizar el contenido y modificar el sitio sin una validación por parte del equipo. Para poder modificar el contenido necesitas hacer un fork, es decir, copiar el repositorio a tu cuenta de Github, para trabajar en él y una vez listo tienes que abrir un Pull Request en el repositorio de codea para que podamos aceptar tu contenido en nuestro repositorio (en este caso tu contenido es nuestro remoto, al aceptar el Pull Request iremos a tu repositorio por el código para integrarlo en nuestro repositorio).</p>
        <h2>¿Qué es una branch?</h2>
        <p>Mucha gente puede trabajar en distintas partes del código al mismo tiempo, las branches son versiones diferentes del código pero que estan interconectadas al pensar que temporalmente pertenecen todas a un árbol y se van dividiendo como las ramas que parten de un único tronco, de ahí su nombre. </p>
        <h2>¿Cómo escribir un artículo?</h2>
        <p>Aquí no vamos a hablar sobre los temas, sólo respecto a la parte técnica. Los artículos se encuentran en el directorio /docs/markdown a partir de la raíz de nuestro repositorio, es necesario crear un nuevo directorio con la fecha y el nombre del archivo, sin espacios o caracteres especiales y separado por guiones y dentro de este directorio crear un archivo llamado index.md, ahí es donde podrás escribir el contenido de tu artículo para que se genere dentro de Codea. Estamos trabajando en guías más detalladas, pero por el momento te recomendamos ver los artículos que ya existen. </p>
        <h2>¿Qué otros detalles son importantes?</h2>
        <p>En author.yaml tienes que agregar tu información si es la primera vez que escribes, en avatars puedes subir una imagen para que aparezca en tu perfil y en src/data/tags.yaml es necesario agregar los tags si es la primera vez que los usas.</p>
        <h2>Resumen</h2>
        <p>WIP.</p>
      </Grid>
    </Grid>
  </Layout>
);

export default ContributePage;

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
