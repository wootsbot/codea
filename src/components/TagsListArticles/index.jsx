import React from 'react'
import PropTypes from 'prop-types'

import TagButton from './TagButton'
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
            <TagButton key={item.node.id}>{item.node.id}</TagButton>
          ))}
        </div>
      </section>
    )
  }
}

export default TagsListArticles
