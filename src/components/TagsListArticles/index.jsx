import React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'

import { navigate } from 'gatsby'

import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'

import { PATCH_ARCHIVE_TAGS } from 'utils/paths'

import styles from './styles.module.scss'

class TagsListArticles extends React.PureComponent {
  static propTypes = {
    tags: PropTypes.array,
  }

  render() {
    const { tags } = this.props

    return (
      <section className={styles.sectionTags}>
        <div className={styles.sectionTagsHeader}>
          <Typography variant="h6" gutterBottom>
            Vea los artículos por etiquetas
          </Typography>
        </div>
        <div className={styles.sectionTagsList}>
          {tags.map(item => (
            <Chip
              className={styles.chip}
              variant="outlined"
              key={item.node.id}
              color="secondary"
              onClick={() =>
                navigate(`${PATCH_ARCHIVE_TAGS}${kebabCase(item.node.id)}`)
              }
              label={item.node.id}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default TagsListArticles
