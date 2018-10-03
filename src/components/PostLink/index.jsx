import React from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'

import { Link } from 'gatsby'

import avatarImage from 'static/img/codea.png'
import styles from './styles.module.scss'

class PostLink extends React.PureComponent {
  static propTypes = {
    post: PropTypes.object,
  }

  render() {
    const { post } = this.props
    const { avatar } = post.frontmatter.author

    return (
      <Paper elevation={0} className={styles.root} component="article">
        <h2 className={styles.title}>
          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
        </h2>

        <p className={styles.summary}>{post.excerpt}</p>

        <div className={styles.footer}>
          <img
            alt="avatar author"
            src={avatar.childImageSharp.fixed.src}
            className={styles.avatar}
          />

          <div className={styles.information}>
            <a href="" className={styles.user}>
              {`(@${post.frontmatter.author.id})`}
            </a>

            <span className={styles.date}>{post.frontmatter.date}</span>
          </div>
        </div>
      </Paper>
    )
  }
}

export default PostLink
