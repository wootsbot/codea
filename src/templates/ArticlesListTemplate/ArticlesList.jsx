import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import TagsListArticles from 'components/TagsListArticles'
import ArticlePreviewLink from 'components/ArticlePreviewLink'

import styles from './styles.module.scss'

class ArticlesList extends React.PureComponent {
  static propTypes = {
    posts: PropTypes.array,
    listTags: PropTypes.array,
    pagination: PropTypes.node,
  }

  renderArticleLink(post) {
    const { node } = post
    const { frontmatter } = node
    const { author } = frontmatter
    const { childImageSharp } = author.avatar
    return (
      <ArticlePreviewLink
        to={node.fields.slug}
        title={frontmatter.title}
        fullName={`${author.firstName} ${author.lastName}`}
        avatar={childImageSharp.fixed}
        date={frontmatter.date}
        excerpt={node.excerpt}
        tags={frontmatter.tags}
      />
    )
  }

  render() {
    const { posts, listTags, pagination } = this.props

    return (
      <Grid container className={styles.listArticles}>
        <Grid container item md={3} className={styles.tagsList}>
          <TagsListArticles tags={listTags} />
        </Grid>

        <Grid container item md={6} className={styles.postsList}>
          <Grid container>
            {posts.map(post => (
              <Grid key={post.node.id} item className={styles.postsListItem}>
                {this.renderArticleLink(post)}
              </Grid>
            ))}
          </Grid>

          <Grid container item md={12}>
            <Grid item md={12} xs={12}>
              {pagination}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default ArticlesList
