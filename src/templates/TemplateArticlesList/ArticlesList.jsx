import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import ArticleLink from 'components/ArticleLink'
import TagsListArticles from 'components/TagsListArticles'

import styles from './TemplateArticlesList.module.scss'

class ArticlesList extends React.PureComponent {
  static propTypes = {
    posts: PropTypes.array,
    listTags: PropTypes.array,
    pagination: PropTypes.node,
  }

  render() {
    const { posts, listTags, pagination } = this.props

    return (
      <Grid container>
        <Grid container item md={9} className={styles.postsList}>
          <Grid container>
            {posts.map(post => (
              <Grid key={post.node.id} item className={styles.postsListItem}>
                <ArticleLink post={post.node} />
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
          <TagsListArticles tags={listTags} />
        </Grid>
      </Grid>
    )
  }
}

export default ArticlesList
