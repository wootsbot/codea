import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import classNames from 'classnames'

import withRoot from 'utils/withRoot'
import NavBar from 'components/NavBar'
import SideBar from 'components/SideBar'
import Footer from 'components/Footer'

import styles from './styles.module.scss'

class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    meta: PropTypes.objectOf(PropTypes.string),
    marginTop: PropTypes.bool,
    footer: PropTypes.bool,
    descriptionContent: PropTypes.string,
  }

  render() {
    const {
      children,
      title,
      marginTop,
      footer,
      descriptionContent,
    } = this.props

    const classMain = classNames({
      [styles.main]: marginTop,
    })

    return (
      <React.Fragment>
        <Helmet>
          <title>{title ? `${title} | Codea` : `Codea`}</title>
          <meta name="twitter:site" content="@wootsbot" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Codea" />
          <meta name="Description" content={`${descriptionContent}`} />
        </Helmet>

        <NavBar />
        <main className={classMain}>{children}</main>

        {footer && <Footer />}

        <SideBar />
      </React.Fragment>
    )
  }
}

Layout.defaultProps = {
  marginTop: false,
  footer: true,
}

export default withRoot(Layout)
