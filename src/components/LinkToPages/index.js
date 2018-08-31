import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import styles from './styles.module.scss'

function LinkToPages({ to, children }) {
  return (
    <Link className={styles.root} to={to}>
      {children}
    </Link>
  )
}

LinkToPages.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
}

export default LinkToPages
