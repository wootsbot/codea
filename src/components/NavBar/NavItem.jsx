import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { withPrefix } from 'gatsby'

import styles from './NavBar.module.scss'

export class NavItem extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
  }

  render() {
    const { href, children } = this.props

    return (
      <li className={styles.item}>
        <Link
          to={href}
          activeClassName={styles.itemActive}
          className={styles.itemLink}>
          {children}
        </Link>
      </li>
    )
  }
}

export default NavItem
