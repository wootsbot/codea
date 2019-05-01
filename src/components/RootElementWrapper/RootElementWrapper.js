import React from 'react'
import { createRenderer } from 'fela'
import PropTypes from 'prop-types'
import { RendererProvider } from 'react-fela'

// This is a funcion component that injects fela for style
const RootElementWrapper = ({ element }) => {
  const renderer = createRenderer()

  return <RendererProvider renderer={renderer}>{element}</RendererProvider>
}

RootElementWrapper.propTypes = {
  element: PropTypes.node.isRequired,
}
