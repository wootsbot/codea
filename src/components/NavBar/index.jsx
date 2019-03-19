import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'

import { getPaths, getPathsActives } from 'utils/paths'

import Brand from './Brand'
import NavItem from './NavItem'
import styles from './styles.module.scss'

const stylesUi = {
  root: {
    maxHeight: '64px',
    minHeight: '64px',
    padding: '0 48px',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginButton: '70px',
  },
  colorPrimary: {
    backgroundColor: 'white',
  },
}

class NavBar extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object,
  }

  render() {
    const { classes } = this.props

    return (
      <AppBar
        elevation={0}
        classes={{ root: classes.root, colorPrimary: classes.colorPrimary }}>
        <Brand />

        <div className={styles.space} />

        <ul className={styles.navItemContainer}>
          {getPathsActives(getPaths).map(path => (
            <NavItem key={path.patch} href={path.patch}>
              {path.label}
            </NavItem>
          ))}
        </ul>
      </AppBar>
    )
  }
}

export default withStyles(stylesUi)(NavBar)
