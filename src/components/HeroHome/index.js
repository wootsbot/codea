import React from 'react'

import Fab from '@material-ui/core/Fab'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import IconKeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown'

import IconCodea from 'images/svg/logo.svg'
import IconCircles from 'images/svg/circles.svg'
import IconCirclesSm from 'images/svg/circles-sm.svg'
import IconTraz from 'images/svg/trazos.svg'
import IconTrazSm from 'images/svg/trazos-sm.svg'

import styles from './styles.module.scss'

const HeroHome = () => (
  <Grid
    className={styles.root}
    component="section"
    container
    direction="row"
    justify="space-between">
    <Grid item md={4} lg={4} sm={12} container>
      <Grid item sm={12} xs={12}>
        <Hidden only={['xs', 'sm']}>
          <img src={IconCircles} alt="CIRCLES" width="300" />
        </Hidden>

        <Hidden only={['md', 'lg', 'xl']}>
          <img src={IconTrazSm} alt="CIRCLES" width="100%" />
        </Hidden>
      </Grid>
    </Grid>

    <Grid
      item
      md={4}
      lg={4}
      sm={12}
      container
      direction="column"
      justify="flex-start"
      alignItems="center">
      <Grid item>
        <img src={IconCodea} alt="CODEA" width="150" />
      </Grid>
      <Grid item container direction="column" alignItems="center">
        <Typography component="h1" variant="h2" gutterBottom align="center">
          Entre más compartas, más aprendes
        </Typography>

        <Typography
          component="p"
          variant="body1"
          gutterBottom
          align="center"
          className={styles.textWelcome}>
          Codea, un proyecto de código abierto. Si te encanta compartir
          conocimiento y participar en proyectos con otros desarrolladores.
          Hemos decidido crear este proyecto para cualquier persona que quiera
          colaborar.
        </Typography>

        <Fab color="primary" aria-label="CODEA TO LINK" href="#start-codea">
          <IconKeyboardArrowDown />
        </Fab>
      </Grid>
    </Grid>

    <Hidden only={['xs', 'sm']}>
      <Grid
        item
        md={4}
        lg={4}
        sm={12}
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-end">
        <Grid item sm={12} xs={12}>
          <img src={IconTraz} alt="CIRCLES" width="300" />
        </Grid>
      </Grid>
    </Hidden>

    <Hidden only={['md', 'lg', 'xl']}>
      <Grid item md={4} lg={4} sm={12} container>
        <Grid item sm={12} xs={12}>
          <img src={IconCirclesSm} alt="CIRCLES" width="100%" />
        </Grid>
      </Grid>
    </Hidden>
  </Grid>
)

export default HeroHome
