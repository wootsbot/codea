import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import ArticlePreviewLink from 'components/ArticlePreviewLink'

import styles from './styles.module.scss'

function ArticlesList({ articles, contributorId }) {
  const [value, setValue] = useState(0)

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <div className={styles.articlesRowArticles}>
      <Paper className={styles.tabs}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          variant="fullWidth">
          <Tab label="Artículos" />
          <Tab label="Historias" disabled />
          <Tab label="Otros" disabled />
        </Tabs>
      </Paper>

      {articles.map(article => {
        if (article.node.frontmatter.author) {
          if (article.node.frontmatter.author.id === contributorId) {
            return (
              <div
                key={article.node.fields.slug}
                style={{ marginBottom: '36px' }}>
                <ArticlePreviewLink
                  to={article.node.fields.slug}
                  title={article.node.frontmatter.title}
                  userId={article.node.frontmatter.author.id}
                  fullName={`${article.node.frontmatter.author.firstName} ${
                    article.node.frontmatter.author.lastName
                  }`}
                  avatar={
                    article.node.frontmatter.author.avatar.childImageSharp.fixed
                  }
                  date={article.node.frontmatter.latestUpdateDate}
                  excerpt={article.node.excerpt}
                  tags={article.node.frontmatter.tags}
                />
              </div>
            )
          }
        }
        return null
      })}
    </div>
  )
}

ArticlesList.propTypes = {
  articles: PropTypes.array,
  contributorId: PropTypes.string,
}

export default ArticlesList
