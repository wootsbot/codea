import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import { muiTheme } from 'utils/muiTheme'

import styles from './styles.module.scss'

export class NavItem extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    iconComponent: PropTypes.node,
  }

  assignActiveStyles = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent ? { style: stylesUI.navItem.active } : {}

  render() {
    const { href, children, iconComponent } = this.props

    return (
      <li className={styles.item}>
        <Link
          to={href}
          getProps={this.assignActiveStyles}
          className={styles.itemLink}>
          <span className={styles.iconComponent}>{iconComponent}</span>
          {children}
        </Link>
      </li>
    )
  }
}

const stylesUI = {
  navItem: {
    active: {
      color: `${muiTheme.palette.secondary.dark}`,
      fontWeight: '600 !important',
    },
  },
}

export default NavItem
