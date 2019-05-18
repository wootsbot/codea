import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import { PATH_ARCHIVE_TAGS } from 'utils/paths'

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
            <Link
              key={item.node.id}
              className={styles.tag}
              color="primary"
              size="small"
              variant="contained"
              to={`${PATH_ARCHIVE_TAGS}${kebabCase(item.node.id)}`}>
              {`#${item.node.id}`}
            </Link>
          ))}
        </div>
      </section>
    )
  }
}

export default TagsListArticles
