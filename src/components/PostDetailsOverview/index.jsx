import React from 'react'
import PropTypes from 'prop-types'

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
