import React from 'react'
import PropTypes from 'prop-types'
import { DiscussionEmbed } from 'disqus-react'

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
    const disqusShortname = 'codea-com-mx'
    const disqusConfig = {
      identifier: 103938,
      title: title,
    }

    return (
      <div className={styles.root}>
        <HeaderDetail title={title} date={date} author={author} />
        <div
          className="codea-article-details-markdown"
          dangerouslySetInnerHTML={html}
        />
        <br />
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    )
  }
}

export default ArticleDetailsOverview
