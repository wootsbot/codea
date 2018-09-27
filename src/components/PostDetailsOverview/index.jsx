import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import avatar from 'static/img/logo.svg'
import avatarImage from 'static/img/codea.png'

import HeaderDetail from './HeaderDetail'
import styles from './styles.module.scss'

class PostDetailsOverview extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    date: PropTypes.string.isRequired,
    html: PropTypes.object,
    author: PropTypes.object,
  }

  render() {
    const { title, date, author, html } = this.props
    return (
      <div className={styles.root}>
        <HeaderDetail title={title} date={date} author={author} />
        <div dangerouslySetInnerHTML={html} />
      </div>
    )
  }
}

export default PostDetailsOverview
