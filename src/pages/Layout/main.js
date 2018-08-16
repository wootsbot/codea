import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './layout.module.scss'

class Main extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    const { children } = this.props
    return <main className={styles.main}>{children}</main>
  }
}

export default Main
