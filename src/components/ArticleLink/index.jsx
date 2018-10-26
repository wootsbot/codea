import React from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './ArticleLink.module.scss'

class ArticleLink extends React.PureComponent {
  static propTypes = {
    post: PropTypes.object,
  }

  render() {
    const { post } = this.props
    const { frontmatter } = post
    const avatar = frontmatter.author.avatar.childImageSharp.fixed

    return (
      <Paper elevation={0} className={styles.root} component="article">
        <h2 className={styles.title}>
          <Link to={frontmatter.path}>{frontmatter.title}</Link>
        </h2>

        <p className={styles.summary}>{post.excerpt}</p>

        <div className={styles.footer}>
          <Img alt="avatar author" fixed={avatar} className={styles.avatar} />

          <div className={styles.information}>
            <a href="" className={styles.user}>
              {`(@${frontmatter.author.id})`}
            </a>

            <span className={styles.date}>{frontmatter.date}</span>
          </div>
        </div>
      </Paper>
    )
  }
}

export default ArticleLink
