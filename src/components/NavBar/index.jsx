import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { getPaths } from 'utils/paths'
import logo from 'static/img/logo.svg'

import NavItem from './NavItem'
import styles from './NavBar.module.scss'

const stylesUi = theme => ({
  root: {
    maxHeight: '64px',
    minHeight: '64px',
    padding: '0 24px',
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorPrimary: {
    backgroundColor: '#fff',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
})

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
        <span className={styles.logo}>
          <img src={logo} alt="" className={styles.logoImage} />
          <Link to="/" className={styles.logoText}>
            Codea
          </Link>
        </span>

        <ul className={styles.navItemContainer}>
          {getPaths.map(path => {
            if (path.active) {
              return (
                <NavItem key={path.href} href={path.href}>
                  {path.label}
                </NavItem>
              )
            }
          })}
        </ul>
      </AppBar>
    )
  }
}

export default withStyles(stylesUi)(NavBar)
