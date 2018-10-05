import React from 'react'
import PropTypes from 'prop-types'

import ChipTimUser from 'components/ChipTimUser'

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
    const avatar = author.avatar.childImageSharp.fixed.src

    return (
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>{title}</h1>

        <div className={styles.headerUserInfo}>
          <ChipTimUser
            to={`/authors/${author.id}`}
            avatar={avatar}
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
