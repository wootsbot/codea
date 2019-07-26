import React from 'react';

import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/styles';

import brandIcon from 'images/svg/brand.svg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    height: '2rem',
    width: props => props.width,
  },
});

function Brand() {
  const classes = useStyles({ width: 'auto' });

  return (
    <span className={classes.root}>
      <Link to="/" className={classes.link}>
        <img src={brandIcon} alt="codea" className={classes.image} />
      </Link>
    </span>
  );
}

export default Brand;
