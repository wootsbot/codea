import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './layout.module.scss'

const sizes = {
  DEFAULT: 'default',
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
}

class Main extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    size: PropTypes.oneOf([
      sizes.DEFAULT,
      sizes.SMALL,
      sizes.MEDIUM,
      sizes.LARGE,
    ]),
  }
  render() {
    const { children, size } = this.props
    const classMain = classNames({
      [styles.mainDefault]: size === sizes.DEFAULT,
      [styles.mainSmall]: size === sizes.SMALL,
      [styles.mainMedium]: size === sizes.MEDIUM,
      [styles.mainLarge]: size === sizes.LARGE,
    })

    return <main className={classMain}>{children}</main>
  }
}

Main.defaultProps = {
  size: 'default',
}

export default Main
