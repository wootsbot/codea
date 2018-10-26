import React from 'react'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'

import styles from './Developer.module.scss'

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
        <span>{fulName}</span>
        <span>{codeRole}</span>
        <span>{location}</span>
        <p>{bio}</p>
      </div>
    )
  }
}

export default Developer
