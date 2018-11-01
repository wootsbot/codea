import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Terminal.module.scss'

// no used
const effects = {
  TYPEWRITER: 'typewriter',
}

class Code extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    character: PropTypes.string,
    effect: PropTypes.oneOf([effects.TYPEWRITER]), // no used
  }

  render() {
    const { children, character, effect } = this.props

    // no used
    const classEffectCommand = classNames(styles.command, {
      [styles.cssTyping]: effect === effects.TYPEWRITER,
    })

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
