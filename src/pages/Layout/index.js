import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import withRoot from 'utils/withRoot'

import './layout.css'

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
        {children}
      </>
    )
  }
}

export default withRoot(Layout)

Layout.defaultProps = {
  meta: {
    description: 'codea blog',
    keywords: 'Programación, codea',
  },
}
