import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './SideBar.module.scss'

export class NavItem extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    iconComponent: PropTypes.node,
  }

  render() {
    const { href, children, iconComponent } = this.props

    return (
      <li className={styles.item}>
        <Link
          to={href}
          activeClassName={styles.itemActive}
          className={styles.itemLink}>
          <span className={styles.iconComponent}>{iconComponent}</span>
          {children}
        </Link>
      </li>
    )
  }
}

export default NavItem
