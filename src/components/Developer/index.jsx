import React from 'react'
import PropTypes from 'prop-types'

import StarsTwoToneIcon from '@material-ui/icons/StarsTwoTone'
import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone'

import Img from 'gatsby-image'

import styles from './styles.module.scss'

class Developer extends React.PureComponent {
  static propTypes = {
    bio: PropTypes.string,
    fulName: PropTypes.string.isRequired,
    codeRole: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.object.isRequired,
  }

  render() {
    const { avatar, fulName, codeRole, location, bio } = this.props

    return (
      <div className={styles.developer}>
        <Img alt="developer" fixed={avatar} className={styles.avatar} />

        <span className={styles.developerFullName}>{fulName}</span>

        <div className={styles.developerIconContainer}>
          <StarsTwoToneIcon />
          <span className={styles.developerRole}>{codeRole}</span>
        </div>

        <div className={styles.developerIconContainer}>
          <LocationOnTwoToneIcon />
          <span className={styles.developerLocation}>{location}</span>
        </div>

        <p className={styles.developerBio}>{bio}</p>
      </div>
    )
  }
}

export default Developer
