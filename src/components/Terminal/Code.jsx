import React from 'react'
import PropTypes from 'prop-types'

import styles from './Terminal.module.scss'

class Code extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    character: PropTypes.string,
  }

  render() {
    const { children, character } = this.props

    return (
      <code className={styles.termCode}>
        <span className={styles.termCodeRoot}>{`${character} `}</span>
        <span>{children}</span>
      </code>
    )
  }
}

Code.defaultProps = {
  character: '$ > ~',
  effect: null,
}

export default Code
