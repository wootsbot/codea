import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import classnames from 'classnames'

import styles from './styles.module.scss'

export class NavItem extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    disable: PropTypes.bool,
  }

  assignActiveStyles = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent ? { style: stylesUI.navItem.active } : {}

  render() {
    const { href, children, disable } = this.props

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
