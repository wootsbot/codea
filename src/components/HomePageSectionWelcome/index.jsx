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
        <Typography align="center" component="h2" variant="h3" gutterBottom>
          ¿Estás listo para comenzar?
        </Typography>
      </Grid>

      <Grid item md={6} sm={12}>
        <Typography align="center" variant="h5" gutterBottom>
          Quizás ya tengas un artículo que quieras compartir, para eso siéntete
          libre de ir al repositorio de codea donde podrás crear tus pull
          requests y aportar con la comunidad.
        </Typography>
      </Grid>

      <Grid item md={6} sm={12} className={styles.sectionWelcomeGridBtnStart}>
        <Button
          target="_blank"
          href="https://github.com/codea-team/codea"
          variant="outlined"
          color="secondary"
          size="large"
          className={styles.sectionWelcomeBtnStart}>
          Comenzar a hacer Pull requests
        </Button>
      </Grid>
    </Grid>
  )
}

export default HomePageSectionWelcome
