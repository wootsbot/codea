import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'

import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import LinkTwoTone from '@material-ui/icons/LinkTwoTone'

import styles from './TagOverview.module.scss'

class TagOverview extends React.PureComponent {
  static propTypes = {
    tag: PropTypes.string,
    tagContend: PropTypes.object,
    articles: PropTypes.array,
    totalCount: PropTypes.number,
  }

  render() {
    const { tag, tagContend, articles, totalCount } = this.props

    return (
      <Paper elevation={1} className={styles.containerTag}>
        <div className={styles.tagHeader}>
          <div className={styles.tagHeaderTitleContainer}>
            <h1 className={styles.tagHeaderTitle}>{tag}</h1>
            {tagContend.web && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                title={tag}
                href={tagContend.web}>
                <LinkTwoTone className={styles.tagHeaderLink} />
              </a>
            )}
          </div>

          <p className={styles.tagHeaderSummary}>{tagContend.description}</p>
        </div>

        <div className={styles.tagSubHeading}>
          <h2 className={styles.tagSubHeadingTitle}>
            Todos los articulos de {tag}
          </h2>
          <Chip
            color="secondary"
            variant="outlined"
            label={`Total de articulos ${totalCount}`}
          />
        </div>

        <div>
          <ul className={styles.tagsList}>
            {articles.map(({ node }) => {
              const { path, title, date } = node.frontmatter
              return (
                <li key={path} className={styles.tagsListItem}>
                  <Link to={path}>{title}</Link>
                  <time className={styles.tagsListTime}>{date}</time>
                </li>
              )
            })}
          </ul>
        </div>
      </Paper>
    )
  }
}

export default TagOverview
