import React from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import styles from './HomePageSectionWelcome.module.scss'

function HomePageSectionWelcome() {
  return (
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
          Quizás ya tengas un artículo que quieras compartir, para eso siéntete
          libre de ir al repositorio de codea donde podrás crear tus pull
          requests y aportar con la comunidad.
        </p>
      </Grid>

      <Grid item md={6} sm={12}>
        <Button
          target="_blank"
          href="https://github.com/codea-team"
          className={styles.sectionWelcomeBtnStart}
          variant="extendedFab"
          color="secondary">
          Comenzar
        </Button>
      </Grid>
    </Grid>
  )
}

export default HomePageSectionWelcome
