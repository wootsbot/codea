import React from 'react'
import PropTypes from 'prop-types'

import Code from './Code'
import styles from './Terminal.module.scss'

class Terminal extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    codeComponent: PropTypes.instanceOf(Code),
    codeBlink: PropTypes.bool,
  }

  render() {
    const { children, codeBlink } = this.props

    return (
      <div className={styles.term}>
        <div className={styles.chrome}>
          <span className={styles.btnClose} />
          <span className={styles.btnMini} />
          <span className={styles.btn} />
        </div>

        <div className={styles.shell}>
          {children}
          {codeBlink && <code className={styles.blink} />}
        </div>
      </div>
    )
  }
}

Terminal.Code = Code

Terminal.defaultProps = {
  codeBlink: true,
}

export default Terminal
