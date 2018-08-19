import React from 'react'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'

import { Link } from 'gatsby'

import avatar from 'static/img/logo.svg'
import styles from './styles.module.scss'

const PostLink = ({ post }) => (
  <Paper elevation={0} className={styles.root} component="article">
    <h2 className={styles.title}>
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
    </h2>

    <p className={styles.summary}>{post.excerpt}</p>

    <div className={styles.footer}>
      <Avatar alt="name author" src={avatar} className={styles.avatar} />
      <div className={styles.information}>
        <span className={styles.author}>
          Jorge Luis Calleja
          <a href="" className={styles.user}>
            (@Woostbot)
          </a>
        </span>
        <span className={styles.date}>{post.frontmatter.date}</span>
      </div>
    </div>
  </Paper>
)

export default PostLink
