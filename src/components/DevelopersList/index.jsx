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
        component="section"
        container
        direction="column"
        alignItems="center">
        <h2>El equipo detras de codea</h2>
        <p>
          El equipo de codea es una gran comunidad que le apaciona desarrolladar
          el futuro tambien estamos muy orgullosos de los autores de los
          articulos de codea
        </p>

        <Grid
          item
          className={styles.developersList}
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start">
          {developers.map(developer => (
            <Grid key={developer.node.id} item md={4}>
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
