import React from 'react'
import { navigate } from 'gatsby-link'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
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

        <Grid item md={4} sm={12} className={styles.page404Content}>
          <h1 className={styles.page404ContentTitle}>Página no disponible.</h1>

          <p>La comunidad esta creando esta página o no existe</p>

          <Button
            className={styles.page404ContentButtonBack}
            variant="extendedFab"
            color="secondary"
            onClick={() => navigate('/')}>
            Vamos al inicio
          </Button>
        </Grid>
      </Grid>
    )
  }
}

export default NotFoundPage
