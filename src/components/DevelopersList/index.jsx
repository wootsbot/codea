import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Developer from 'components/Developer'

import styles from './styles.module.scss'

class DevelopersList extends React.PureComponent {
  static propTypes = {
    developers: PropTypes.array,
    width: PropTypes.string,
  }

  render() {
    const { developers } = this.props

    return (
      <section className={styles.developers}>
        <div className={styles.developersHeader}>
          <Typography align="center" component="h2" variant="h3" gutterBottom>
            Detrás de codea
          </Typography>

          <Typography
            className={styles.developersListResume}
            align="center"
            component="p"
            variant="body1"
            gutterBottom
            color="textSecondary">
            El equipo de codea es una gran comunidad que le apaciona
            desarrolladar el futuro de la web.
          </Typography>

          <div className={styles.developersButton}>
            <Button
              target="_blank"
              href="https://github.com/codea-team/codea/graphs/contributors"
              color="secondary"
              size="large">
              Conocer más de la comunidad
            </Button>
          </div>
        </div>

        <div className={styles.developersList}>
          <div className={styles.developersScrollable}>
            {developers.map(developer => (
              <Developer
                key={developer.node.id}
                userId={developer.node.codeaId}
                fulName={`${developer.node.firstName} ${
                  developer.node.lastName
                }`}
                avatar={developer.node.avatar.childImageSharp.fixed}
                bio={developer.node.bio}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default DevelopersList
