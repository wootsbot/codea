import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import Developer from 'components/Developer'

import styles from './DevelopersList.module.scss'

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
          <h2 className={styles.developersListTitle}>Desarrolladores</h2>
        </Grid>

        <Grid item md={8} sm={12}>
          <p className={styles.developersListResume}>
            El equipo de codea es una gran comunidad que le apaciona
            desarrolladar el futuro de la web.
          </p>
        </Grid>

        <Grid
          item
          className={styles.developersList}
          container
          direction="row"
          justify="center">
          {developers.map(developer => (
            <Grid key={developer.node.id} item md={4} sm={12}>
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
