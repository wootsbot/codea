import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'

import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import LinkTwoTone from '@material-ui/icons/LinkTwoTone'

import styles from './styles.module.scss'

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
            <Typography
              color="primary"
              component="h1"
              variant="h4"
              gutterBottom>
              {tag}
            </Typography>

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

          <Typography variant="subtitle1" gutterBottom>
            {tagContend.description}
          </Typography>
        </div>

        <div className={styles.tagSubHeading}>
          <Typography variant="body2">Todos los articulos de {tag}</Typography>
          <Chip
            color="secondary"
            variant="outlined"
            label={`Total de articulos ${totalCount}`}
          />
        </div>

        <div>
          <ul className={styles.tagsList}>
            {articles.map(({ node }) => {
              const { slug } = node.fields
              const { title, date } = node.frontmatter
              return (
                <li key={slug} className={styles.tagsListItem}>
                  <Link to={slug}>{title}</Link>
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
