import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import styles from './styles.module.scss'

class SuggestionLink extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
  }

  render() {
    const { children, to } = this.props

    return (
      <article className={styles.root}>
        <Link to={to}>{children}</Link>
      </article>
    )
  }
}

export default SuggestionLink
