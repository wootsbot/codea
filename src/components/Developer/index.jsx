import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'
import Img from 'gatsby-image'

import Typography from '@material-ui/core/Typography'

import styles from './styles.module.scss'

class Developer extends React.PureComponent {
  static propTypes = {
    bio: PropTypes.string,
    width: PropTypes.string,
    fulName: PropTypes.string.isRequired,
    avatar: PropTypes.object.isRequired,
  }

  render() {
    const { avatar, fulName, bio } = this.props

    return (
      <blockquote className={clsx(styles.developer)}>
        <div>
          <Img
            alt="developer"
            fixed={avatar}
            className={clsx(styles.developerCover)}
          />
        </div>

        <div className={clsx(styles.developerDetails)}>
          <Typography component="h6" variant="subtitle1" color="textSecondary">
            {fulName}
          </Typography>

          <Typography component="h6" variant="caption" color="textSecondary">
            {bio}
          </Typography>
        </div>
      </blockquote>
    )
  }
}

export default Developer
