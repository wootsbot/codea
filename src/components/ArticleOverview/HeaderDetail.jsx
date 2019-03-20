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
      <header className={styles.header}>
        <Typography
          className={styles.headerTitle}
          color="primary"
          component="h1"
          variant="h3"
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

          <Typography className={styles.headerAuthor} variant="subtitle2">
            {author.bio}
          </Typography>

          <Typography variant="subtitle2">
            <time>{date}</time>
          </Typography>
        </div>
      </header>
    )
  }
}

export default HeaderDetail
