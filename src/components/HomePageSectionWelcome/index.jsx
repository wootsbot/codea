import React from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import styles from './styles.module.scss'

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
        <Typography variant="h3" gutterBottom>
          ¿Estas listo para comenzar?
        </Typography>
      </Grid>

      <Grid item md={6} sm={12}>
        <Typography variant="subtitle1" gutterBottom>
          Quizás ya tengas un artículo que quieras compartir, para eso siéntete
          libre de ir al repositorio de codea donde podrás crear tus pull
          requests y aportar con la comunidad.
        </Typography>
      </Grid>

      <Grid item md={6} sm={12} className={styles.sectionWelcomeGridBtnStart}>
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
