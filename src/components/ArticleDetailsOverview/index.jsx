import React from 'react'
import PropTypes from 'prop-types'

import HeaderDetail from './HeaderDetail'
import styles from './styles.module.scss'

class ArticleDetailsOverview extends React.PureComponent {
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
        <div
          className="codea-article-details-markdown"
          dangerouslySetInnerHTML={html}
        />
      </div>
    )
  }
}

export default ArticleDetailsOverview
