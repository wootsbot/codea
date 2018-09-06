import React from 'react'

import Button from '@material-ui/core/Button'

import TagLink from 'components/TagLink'

import styles from './TagLinkList.module.scss'

class TagLinkList extends React.PureComponent {
  render() {
    const tags = ['ReactJS', 'Angular', 'Python', 'VueJS', 'Redux']
    return (
      <div className={styles.root}>
        <ul className={styles.tags}>
          {tags.map(item => (
            <TagLink key={item}> {item} </TagLink>
          ))}

          <TagLink button> Ver todas </TagLink>
        </ul>
      </div>
    )
  }
}

export default TagLinkList
