/* eslint-disable no-unused-vars */
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import Brand from './Brand';
import NavItem from './NavItem';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  listLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  spacer: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={1} className={classes.root}>
      <Toolbar>
        <Brand />

        <div className={classes.spacer} />

        <ul className={classes.listLinks}>
          <NavItem href="/none">Artículos</NavItem>

          <NavItem href="/none">Noticias</NavItem>

          <NavItem href="/none">Contribuir</NavItem>
        </ul>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
