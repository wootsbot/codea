import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FelaComponent as F } from 'react-fela'

import { title, content } from './Question.style'

class Question extends Component {
  render() {
    const { question } = this.props

    return (
      <Fragment>
        <F as="h2" variant="h3" style={title}>
          {question.title}
        </F>
        <F as="p" variant="body1" style={content}>
          {question.content}
        </F>
      </Fragment>
    )
  }
}

export default Question
