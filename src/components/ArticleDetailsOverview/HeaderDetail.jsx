import React from 'react'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'

import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'

import styles from './styles.module.scss'

class HeaderDetail extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    author: PropTypes.object,
    classes: PropTypes.object,
  }

  render() {
    const { title, date, author } = this.props
    const avatar = author.avatar.childImageSharp.fixed

    return (
      <div className={styles.header}>
        <Typography
          className={styles.headerTitle}
          color="primary"
          component="h1"
          variant="h4"
          gutterBottom>
          {title}
        </Typography>

        <div className={styles.headerUserInfo}>
          <Chip
            avatar={
              <Img
                className={styles.avatar}
                alt="avatar author"
                fixed={avatar}
              />
            }
            label={`${author.firstName} ${author.lastName}`}
          />

          <Typography className={styles.headerAuthor} variant="subtitle1">
            {author.bio}
          </Typography>

          <Typography variant="overline">
            <time>{date}</time>
          </Typography>
        </div>
      </div>
    )
  }
}

export default HeaderDetail
