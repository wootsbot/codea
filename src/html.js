import React from 'react'
import PropTypes from 'prop-types'

import { themeUi } from 'utils/themeColor'
import favicon from '../src/static/img/favicon.png'

export default class HTML extends React.Component {
  render() {
    const {
      postBodyComponents,
      body,
      preBodyComponents,
      bodyAttributes,
      headComponents,
      htmlAttributes,
    } = this.props

    return (
      <html {...htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content={themeUi.palette.primary.main} />
          <meta
            name="msapplication-navbutton-color"
            content={themeUi.palette.primary.main}
          />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content={themeUi.palette.primary.main}
          />

          <link rel="shortcut icon" type="image/png" href={favicon} />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Code+Pro|Karla|Lato|Roboto"
            rel="stylesheet"
          />
          {headComponents}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: body }}
          />
          {postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
