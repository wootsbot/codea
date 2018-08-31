import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import classNames from 'classnames'

import withRoot from 'utils/withRoot'
import NavBar from 'components/NavBar'
import SideBar from 'components/SideBar'
import Footer from 'components/Footer'

import styles from './layout.module.scss'
import './root.scss'

const sizes = {
  DEFAULT: 'default',
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
}

class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    meta: PropTypes.objectOf(PropTypes.string),
    sizePadding: PropTypes.oneOf([
      sizes.DEFAULT,
      sizes.SMALL,
      sizes.MEDIUM,
      sizes.LARGE,
    ]),
  }

  render() {
    const { children, title, meta, sizePadding } = this.props

    const classMain = classNames({
      [styles.mainDefault]: sizePadding === sizes.DEFAULT,
      [styles.mainSmall]: sizePadding === sizes.SMALL,
      [styles.mainMedium]: sizePadding === sizes.MEDIUM,
      [styles.mainLarge]: sizePadding === sizes.LARGE,
    })

    return (
      <>
        <Helmet
          title={title && title}
          meta={[
            { name: 'description', content: meta.description },
            { name: 'keywords', content: meta.keywords },
          ]}
        />
        <NavBar />
        <main className={classMain}>{children}</main>
        <Footer />
        <SideBar />
      </>
    )
  }
}

Layout.defaultProps = {
  meta: {
    description: 'codea blog',
    keywords: 'Programación, codea',
  },
  sizePadding: 'default',
}

export default withRoot(Layout)
