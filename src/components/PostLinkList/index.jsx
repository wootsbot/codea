import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import PostLink from 'components/PostLink'
import TagLinkList from 'components/TagLinkList'

import styles from './styles.module.scss'

class PostLinkList extends React.PureComponent {
  static propTypes = {
    posts: PropTypes.array,
    listTags: PropTypes.array,
    pagination: PropTypes.node,
  }

  render() {
    const { posts, listTags, pagination } = this.props

    return (
      <Grid container>
        <Grid container item md={9} className={styles.containerTagsList}>
          <TagLinkList tags={listTags} />
        </Grid>

        <Grid container item md={9} className={styles.postsList}>
          <Grid container>
            {posts.map(post => (
              <Grid key={post.node.id} item className={styles.postsListItem}>
                <PostLink post={post.node} />
              </Grid>
            ))}
          </Grid>

          <Grid container item md={12}>
            <Grid item md={12} xs={12}>
              {pagination}
            </Grid>
          </Grid>
        </Grid>

        <Grid container item md={3} className={styles.tagsList}>
          <Paper>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            explicabo odio animi reiciendis est sequi numquam itaque voluptas
            ullam, doloribus accusantium similique eligendi necessitatibus amet.
            Harum consequuntur iste mollitia culpa!
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default PostLinkList
