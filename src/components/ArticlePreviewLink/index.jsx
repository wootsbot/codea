import React from 'react'
import PropTypes from 'prop-types'

import kebabCase from 'lodash/kebabCase'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { PATCH_ARCHIVE_TAGS } from 'utils/paths'

import styles from './ArticlePreviewLink.module.scss'

class ArticlePreviewLink extends React.PureComponent {
  static propTypes = {
    fullName: PropTypes.string,
    to: PropTypes.string,
    title: PropTypes.string,
    avatar: PropTypes.object,
    excerpt: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.array,
  }

  render() {
    const { title, fullName, avatar, date, to, tags, excerpt } = this.props

    return (
      <article>
        <h3 className={styles.articleTitle}>
          <Link to={to}>{title}</Link>
        </h3>

        <div className={styles.articleAuthor}>
          <Img
            className={styles.articleAuthorAvatar}
            alt="avatar author"
            fixed={avatar}
          />

          <div className={styles.articleAuthorInfo}>
            <small>
              <Link to="/">{fullName}</Link>
            </small>

            <small>
              <time className={styles.articleAuthorInfoDate}>{date}</time>
            </small>

            <div className={styles.articleAuthorTags}>
              {tags.map(tag => (
                <Link to={`${PATCH_ARCHIVE_TAGS}${kebabCase(tag)}`} key={tag}>
                  <small style={{ marginRight: '5px' }}>{`${tag}`}</small>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className={styles.articleAuthorSummary}>{excerpt}</p>
      </article>
    )
  }
}

export default ArticlePreviewLink
