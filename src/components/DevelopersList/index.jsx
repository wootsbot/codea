import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Developer from 'components/Developer'

import styles from './styles.module.scss'

class DevelopersList extends React.PureComponent {
  static propTypes = {
    developers: PropTypes.array,
  }

  render() {
    const { developers } = this.props

    return (
      <Grid
        className={styles.developersSection}
        component="section"
        container
        direction="column"
        alignItems="center">
        <Grid item md={4} sm={12}>
          <Typography align="center" variant="h3" gutterBottom>
            Detrás de codea
          </Typography>
        </Grid>

        <Grid item md={6} sm={12}>
          <Typography
            className={styles.developersListResume}
            align="center"
            variant="body1"
            gutterBottom>
            El equipo de codea es una gran comunidad que le apaciona
            desarrolladar el futuro de la web.
          </Typography>
        </Grid>

        <Grid item md={12}>
          <Button
            target="_blank"
            href="https://github.com/codea-team/codea/graphs/contributors"
            variant="outlined"
            size="large"
            className={styles.teamBtn}>
            Conocer más de la comunidad
          </Button>
        </Grid>

        <Grid
          item
          className={styles.developersList}
          container
          direction="row"
          justify="center">
          {developers.map(developer => (
            <Grid
              className={styles.developerGridItem}
              key={developer.node.id}
              item
              md={4}
              sm={12}>
              <Developer
                fulName={`${developer.node.firstName} ${
                  developer.node.lastName
                }`}
                avatar={developer.node.avatar.childImageSharp.fixed}
                location={developer.node.location}
                bio={developer.node.bio}
                codeRole={developer.node.codeRole}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
  }
}

export default DevelopersList
