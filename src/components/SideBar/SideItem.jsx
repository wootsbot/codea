import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import classnames from 'classnames'

import { muiTheme } from 'utils/muiTheme'

import styles from './styles.module.scss'

export class NavItem extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    iconComponent: PropTypes.node,
    disable: PropTypes.bool,
  }

  assignActiveStyles = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent ? { style: stylesUI.navItem.active } : {}

  render() {
    const { href, children, iconComponent, disable } = this.props

    return (
      <li
        className={classnames(styles.item, {
          [styles.itemDisable]: disable,
        })}>
        <Link
          to={href}
          getProps={this.assignActiveStyles}
          className={classnames(styles.itemLink, {
            [styles.itemLinkDisable]: disable,
          })}>
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
