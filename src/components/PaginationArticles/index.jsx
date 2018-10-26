import React from 'react'
import PropTypes from 'prop-types'

import { navigate } from 'gatsby-link'

import Button from '@material-ui/core/Button'
import IconNavigateBefore from '@material-ui/icons/NavigateBeforeTwoTone'
import IconNavigateNext from '@material-ui/icons/NavigateNextTwoTone'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'

import styles from './PaginationArticles.module.scss'

class PaginationArticles extends React.PureComponent {
  static propTypes = {
    first: PropTypes.bool,
    last: PropTypes.bool,
    baseUrl: PropTypes.string,
    previousUrl: PropTypes.string,
    nextUrl: PropTypes.string,
    pageCount: PropTypes.number,
    pageIndex: PropTypes.number,
  }

  handleNavigate(url) {
    const page = pages
    navigate(url)
  }

  handleChange = event => {
    const page = event.target.value
    const { baseUrl } = this.props

    navigate(page != 1 ? `${baseUrl}/${page}` : baseUrl)
  }

  render() {
    const {
      previousUrl,
      nextUrl,
      pageCount,
      pageIndex,
      first,
      last,
    } = this.props

    const pagesArray = Array.from({ length: pageCount }, (_, i) => {
      return i + 1
    })

    return (
      <div className={styles.root}>
        <div className={styles.paginationButtons}>
          <Button
            size="small"
            disabled={first}
            onClick={() => this.handleNavigate(previousUrl, pageIndex)}>
            <IconNavigateBefore />
            Artículos Nuevos
          </Button>

          <Button
            size="small"
            disabled={last}
            onClick={() => this.handleNavigate(nextUrl, pageIndex)}>
            Artículos Anteriores
            <IconNavigateNext />
          </Button>
        </div>

        <div className={styles.paginationPages}>
          <span>Monstrando Pagina</span>

          <Select
            className={styles.paginationSelect}
            value={pageIndex}
            onChange={this.handleChange}
            inputProps={{ name: 'page', id: 'pages' }}>
            {pagesArray.map(item => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>

          <span>de </span>

          <span>{pageCount}</span>
        </div>
      </div>
    )
  }
}

export default PaginationArticles
