import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import NavBar from 'components/NavBar';

const useStyles = makeStyles(theme => ({
  main: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <NavBar />

      <main className={classes.main}>{children}</main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
