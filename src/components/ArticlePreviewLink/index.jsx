import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import Img from 'gatsby-image'
import kebabCase from 'lodash/kebabCase'

import Typography from '@material-ui/core/Typography'

import { PATH_ARCHIVE_TAGS } from 'utils/paths'

import DateFormat from 'components/DateFormat'
import styles from './styles.module.scss'

class ArticlePreviewLink extends React.PureComponent {
  static propTypes = {
    userId: PropTypes.string,
    fullName: PropTypes.string,
    to: PropTypes.string,
    title: PropTypes.string,
    avatar: PropTypes.object,
    excerpt: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.array,
  }

  render() {
    const {
      title,
      userId,
      fullName,
      avatar,
      date,
      to,
      tags,
      excerpt,
    } = this.props

    return (
      <article>
        <header>
          <Typography
            className={styles.articleTitle}
            color="primary"
            component="h3"
            gutterBottom>
            <Link to={to}>{title}</Link>
          </Typography>
        </header>

        <div className={styles.articleAuthor}>
          <Img
            className={styles.articleAuthorAvatar}
            alt="avatar author"
            fixed={avatar}
          />

          <div className={styles.articleAuthorInfo}>
            <small>
              <Link to={`/contributors/${kebabCase(userId)}`}>{fullName}</Link>
            </small>

            <small>
              <time className={styles.articleAuthorInfoDate}>
                <DateFormat date={date} format="ll" />
              </time>
            </small>

            <div className={styles.articleAuthorTags}>
              {tags.map(tag => (
                <Link to={`${PATH_ARCHIVE_TAGS}${kebabCase(tag)}`} key={tag}>
                  <small style={{ marginRight: '8px' }}>{`#${tag}`}</small>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Typography
          className={styles.articleAuthorSummary}
          color="primary"
          variant="body1"
          gutterBottom>
          {excerpt}
        </Typography>
      </article>
    )
  }
}

export default ArticlePreviewLink
