import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import avatar from 'static/img/logo.svg'
import avatarImage from 'static/img/codea.png'

import GetUser from './GetUser'
import styles from './styles.module.scss'

class PostDetailsOverview extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.string.isRequired,
    html: PropTypes.object,
  }

  render() {
    const { title, date, html } = this.props
    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <Avatar
            alt="name author"
            src={avatarImage}
            className={styles.avatar}
          />
          <GetUser date={date} />
        </div>

        <h1>{title}</h1>

        <div dangerouslySetInnerHTML={html} />
      </div>
    )
  }
}

export default PostDetailsOverview
