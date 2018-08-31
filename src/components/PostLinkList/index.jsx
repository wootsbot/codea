import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import PostLink from 'components/PostLink'

import styles from './styles.module.scss'

class PostLinkList extends React.PureComponent {
  static propTypes = {
    posts: PropTypes.array,
  }

  render() {
    const { posts } = this.props

    return (
      <Grid container direction="row" justify="center">
        {posts.map(post => (
          <Grid
            key={post.node.id}
            item
            md={3}
            sm={12}
            xs={12}
            className={styles.rootItem}>
            <PostLink post={post.node} />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default PostLinkList
