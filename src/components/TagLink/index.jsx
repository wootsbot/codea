import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './TagLink.module.scss'
import './root.scss'

class TagLink extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    button: PropTypes.bool,
  }
  render() {
    const { children, button } = this.props
    const second = children[1]
    const classNameCustom = classNames(styles.root, {
      [styles.button]: button,
      [`tag-${second}`]: true,
    })

    return <li className={classNameCustom}>{children}</li>
  }
}

TagLink.defaultProps = {
  button: false,
}

export default TagLink
