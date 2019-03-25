import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'
import kebabCase from 'lodash/kebabCase'

import Button from '@material-ui/core/Button'

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
        <div className={styles.sectionTagsList}>
          {tags.map(item => (
            <Button
              color="primary"
              key={item.node.id}
              className={clsx(
                styles.tagItem,
                `tag-styles-${kebabCase(item.node.id)}`
              )}
              size="small"
              variant="contained"
              href={`${PATCH_ARCHIVE_TAGS}${kebabCase(item.node.id)}`}>
              {item.node.id}
            </Button>
          ))}
        </div>
      </section>
    )
  }
}

export default TagsListArticles
