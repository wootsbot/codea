import React from 'react'
import PropTypes from 'prop-types'
import { DiscussionEmbed } from 'disqus-react'

import HeaderDetail from './HeaderDetail'
import styles from './styles.module.scss'

class ArticleOverview extends React.PureComponent {
  static propTypes = {
    slug: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string.isRequired,
    html: PropTypes.object,
    author: PropTypes.object,
  }

  render() {
    const { title, date, author, html, slug } = this.props

    const disqusShortname = 'codea-com-mx'

    const disqusConfig = {
      url: `https://codea.com.mx${slug}`,
      identifier: slug,
      title: title,
    }

    return (
      <article className={styles.root}>
        <HeaderDetail title={title} date={date} author={author} />

        <div
          className="codea-article-details-markdown"
          dangerouslySetInnerHTML={html}
        />

        <footer className={styles.footer}>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </footer>
      </article>
    )
  }
}

export default ArticleOverview
