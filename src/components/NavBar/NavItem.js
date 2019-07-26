import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
  },
  link: {
    padding: '0 2rem',
    textDecoration: 'none',
    fontWeight: 500,
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.text.secondary,
    },
  },
  active: {
    color: theme.palette.text.secondary,
  },
}));

function NavItem({ href, children }) {
  const classes = useStyles();

  return (
    <li className={classes.root}>
      <Link to={href} className={classes.link} activeClassName={classes.active}>
        {children}
      </Link>
    </li>
  );
}

NavItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

export default NavItem;
