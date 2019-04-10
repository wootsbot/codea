import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Divider from '@material-ui/core/Divider'

import IconNook from '@material-ui/icons/BookTwoTone'

import DateFormat from 'components/DateFormat'
import styles from './styles.module.scss'

function ArticlesList({ articles, contributorId }) {
  return (
    <Paper elevation={1} className={styles.tabContainer}>
      <List>
        {articles.map(article => {
          if (article.node.frontmatter.author) {
            if (article.node.frontmatter.author.id === contributorId) {
              return (
                <React.Fragment key={article.node.fields.slug}>
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <IconNook />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <div className={styles.tabArticleLinkContainer}>
                          <Link to={article.node.fields.slug}>
                            {article.node.frontmatter.title}
                          </Link>

                          <Typography
                            component="time"
                            variant="caption"
                            color="textSecondary">
                            <DateFormat
                              date={article.node.frontmatter.latestUpdateDate}
                              format="ll"
                            />
                          </Typography>
                        </div>
                      }
                      secondary={article.node.excerpt}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              )
            }
          }
          return null
        })}
      </List>
    </Paper>
  )
}

ArticlesList.propTypes = {
  articles: PropTypes.array,
  contributorId: PropTypes.string,
}

export default ArticlesList
