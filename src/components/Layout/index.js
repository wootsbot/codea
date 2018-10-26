import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import classNames from 'classnames'

import withRoot from 'utils/withRoot'
import NavBar from 'components/NavBar'
import SideBar from 'components/SideBar'
import Footer from 'components/Footer'

import styles from './Layout.module.scss'

class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    meta: PropTypes.objectOf(PropTypes.string),
    marginTop: PropTypes.bool,
  }

  render() {
    const { children, title, meta, marginTop } = this.props

    const classMain = classNames({
      [styles.main]: marginTop,
    })

    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}

Layout.defaultProps = {
  meta: {
    description: 'codea blog',
    keywords: 'Programación, codea',
  },
  marginTop: false,
}

export default withRoot(Layout)
