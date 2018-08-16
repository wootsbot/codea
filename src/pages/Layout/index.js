import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import withRoot from 'utils/withRoot'

import NavBar from 'components/NavBar'
import SideBar from 'components/SideBar'

import Main from './main'
import './layout.module.scss'

class Layout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    meta: PropTypes.objectOf(PropTypes.string),
  }

  render() {
    const { children, title, meta } = this.props

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
        <Main>{children}</Main>
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
}

export default withRoot(Layout)
