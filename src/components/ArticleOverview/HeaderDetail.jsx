import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'
import Img from 'gatsby-image'

import Typography from '@material-ui/core/Typography'

import styles from './styles.module.scss'

import DateFormat from 'components/DateFormat'

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

        <div className={styles.author}>
          <Img
            className={styles.authorAvatar}
            alt="avatar author"
            fixed={avatar}
          />

          <div className={styles.authorDetails}>
            <div className={styles.authorBio}>
              <Typography variant="body2">
                {`${author.firstName} ${author.lastName}`}
              </Typography>

              <span className={clsx(styles.space, styles.authorMobile)}>•</span>

              <Typography variant="subtitle2" className={styles.authorMobile}>
                {author.bio}
              </Typography>
            </div>

            <div className={styles.authorDate}>
              <Typography variant="subtitle1">
                <div className={styles.authorDateContainer}>
                  <time>
                    <DateFormat date={date} format="ll" />
                  </time>

                  <span className={styles.space}>•</span>

                  <time>
                    <DateFormat date={date} format="ll" fromNow />
                  </time>
                </div>
              </Typography>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default HeaderDetail
