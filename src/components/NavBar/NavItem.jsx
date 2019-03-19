import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import styles from './styles.module.scss'

export class NavItem extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
  }

  assignActiveStyles = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent ? { style: stylesUI.navItem.active } : {}

  render() {
    const { href, children } = this.props

    return (
      <li className={styles.item}>
        <Link
          to={href}
          getProps={this.assignActiveStyles}
          className={styles.itemLink}>
          {children}
        </Link>
      </li>
    )
  }
}

const stylesUI = {
  navItem: {
    active: {
      borderBottom: `2.5px solid #000`,
      fontWeight: '700 !important',
    },
  },
}

export default NavItem
