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
      <Grid
        container
        direction="column"
        alignItems="center"
        className={styles.root}>
        <Grid
          item
          xl={9}
          lg={9}
          md={12}
          sm={12}
          xs={12}
          container
          direction="row">
          {posts.map(post => (
            <Grid key={post.node.id} item md={4} lg={4} xl={3}>
              <PostLink post={post.node} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    )
  }
}

export default PostLinkList
