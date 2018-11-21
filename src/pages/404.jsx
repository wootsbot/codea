import React from 'react'
import { navigate } from 'gatsby-link'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { UndrawRising } from 'react-undraw-illustrations'

import styles from './index.module.scss'

class NotFoundPage extends React.PureComponent {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={styles.page404}>
        <Grid item md={4} sm={12}>
          <UndrawRising primaryColor="#243e48" height="250px" />
        </Grid>

        <Grid item md={5} sm={12} className={styles.page404Content}>
          <Typography
            className={styles.page404ContentTitle}
            component="h1"
            variant="h2"
            gutterBottom>
            Lo sentimos, pero no existe la página.
          </Typography>

          <Typography
            className={styles.page404ContentMessage}
            variant="subtitle1"
            gutterBottom>
            La comunidad esta creando esta página o no existe
          </Typography>

          <Button
            className={styles.page404ContentButtonBack}
            variant="outlined"
            color="secondary"
            onClick={() => navigate('/')}>
            Vamos al inicio
          </Button>

          <Typography
            className={styles.page404ContentHello}
            variant="subtitle1"
            gutterBottom>
            codea.com.mx
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default NotFoundPage
