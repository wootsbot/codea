import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'

import withWidth from '@material-ui/core/withWidth'
import Typography from '@material-ui/core/Typography'

import Img from 'gatsby-image'

import styles from './styles.module.scss'

class Developer extends React.PureComponent {
  static propTypes = {
    bio: PropTypes.string,
    width: PropTypes.string,
    fulName: PropTypes.string.isRequired,
    avatar: PropTypes.object.isRequired,
  }

  render() {
    const { avatar, fulName, bio, width } = this.props

    return (
      <div
        className={clsx(styles.developer, {
          [styles.developerColumn]: width != 'lg' && width != 'xl',
        })}>
        <Img alt="developer" fixed={avatar} className={styles.developerCover} />

        <div
          className={clsx(styles.developerDetails, {
            [styles.developerDetailsNotMargin]: width != 'lg' && width != 'xl',
          })}>
          <Typography component="h6" variant="subtitle1" color="textSecondary">
            {fulName}
          </Typography>

          <Typography component="h6" variant="caption" color="textSecondary">
            {bio}
          </Typography>
        </div>
      </div>
    )
  }
}

export default withWidth()(Developer)
