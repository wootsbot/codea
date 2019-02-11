// @flow
import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import JssProvider from 'react-jss/lib/JssProvider'

import getPageContext from './getPageContext'

// styles code and styles global
import 'styles/codea-syntax.scss'
import 'styles/global-styles.scss'

function withRoot(Component) {
  class WithRoot extends React.Component {
    constructor(props) {
      super(props)

      this.pagePropsContext = getPageContext()
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#server-side-jss')
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      return (
        <JssProvider
          generateClassName={this.pagePropsContext.generateClassName}>
          <MuiThemeProvider
            theme={getPageContext().theme}
            sheetsManager={this.pagePropsContext.sheetsManager}>
            <CssBaseline />
            <Component {...this.props} />
          </MuiThemeProvider>
        </JssProvider>
      )
    }
  }

  WithRoot.propTypes = {
    pageContext: PropTypes.object,
    Component: PropTypes.node,
  }

  return WithRoot
}

export default withRoot
