import React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'
import classNames from 'classnames'
import Link from 'gatsby-link'

import styles from './TagLink.module.scss'

class TagLink extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
  }

  render() {
    const { children, to } = this.props
    const classNameCustom = classNames(styles.tag, {
      [`tag-${kebabCase(children)}`]: true,
    })

    return (
      <li>
        <Link className={classNameCustom} to={to}>
          {children}
        </Link>
      </li>
    )
  }
}

TagLink.defaultProps = {
  button: false,
}

export default TagLink
