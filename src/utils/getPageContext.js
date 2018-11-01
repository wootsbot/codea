/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss'
import {
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles'

import { muiTheme } from './muiTheme'

const theme = createMuiTheme(muiTheme)

function createPageContext() {
  return {
    theme,
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName(),
  }
}

export default function getPageContext() {
  if (!process.browser) {
    return createPageContext()
  }

  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext()
  }

  return global.__INIT_MATERIAL_UI__
}
