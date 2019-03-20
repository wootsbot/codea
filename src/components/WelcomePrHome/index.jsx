import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'

import styles from './styles.module.scss'

function WelcomePrHome() {
  return (
    <Grid
      id="start-codea"
      className={styles.sectionWelcome}
      component="section"
      container
      direction="column"
      justify="center"
      alignItems="center">
      <Grid item md={6} sm={12}>
        <Typography align="center" component="h2" variant="h3" gutterBottom>
          ¿Estás listo para comenzar?
        </Typography>
      </Grid>

      <Grid item md={6} sm={12}>
        <Typography align="center" component="p" variant="body1" gutterBottom>
          Quizás ya tengas un artículo o quieras crearlo y compartir, para eso
          siéntete libre de ir al repositorio de codea donde podrás crear tus
          pull requests y aportar con la comunidad.
        </Typography>
      </Grid>

      <Grid item md={6} sm={12} className={styles.sectionWelcomeGridBtnStart}>
        <Fab
          target="_blank"
          href="https://github.com/codea-team/codea"
          size="large"
          variant="extended"
          color="primary"
          aria-label="Add">
          Hacer un Pull Request
        </Fab>
      </Grid>
    </Grid>
  )
}

export default WelcomePrHome
