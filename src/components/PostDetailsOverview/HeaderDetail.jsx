import React from 'react'
import PropTypes from 'prop-types'

import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'

import ChipTimUser from 'components/ChipTimUser'

import avatarImage from 'static/img/codea.png'

import styles from './styles.module.scss'

class HeaderDetail extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    author: PropTypes.object,
    classes: PropTypes.object,
  }

  render() {
    const { title, date, author, classes } = this.props

    return (
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>{title}</h1>

        <div className={styles.headerUserInfo}>
          <ChipTimUser
            to={`/authors/${author.id}`}
            avatar={author.avatar.childImageSharp.fixed.src}
            label={`${author.firstName} ${author.lastName}`}
          />

          <p className={styles.headerAuthor}>{author.bio}</p>

          <span className={styles.headerDate}>{date}</span>
        </div>
      </div>
    )
  }
}

export default HeaderDetail
