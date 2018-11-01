import React from 'react'
import PropTypes from 'prop-types'
import { navigate, Link } from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import Image from 'static/404_no_page2.png'

import styles from './404.module.scss'

const stylesUI = {
  root: {
    background: 'linear-gradient(45deg, #ffd152 30%, #FF8E53 90%)',
    borderRadius: 50,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 142, 83, .3)',

    '&:hover': {
      background: 'linear-gradient(45deg, #FF8E53 30%, #ffd152 90%)',
    },
  },
}

class NotFoundPage extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object,
  }

  render() {
    const { classes } = this.props

    return (
      <div style={{ backgroundImage: `url(${Image})` }} className={styles.root}>
        <div className={styles.messagesAndActions}>
          <p className={styles.message}>
            <strong className={styles.strongText}>...Opps,</strong> esta página
            no está disponible o estamos trabajando en ella.
          </p>

          <Button
            classes={{ root: classes.root }}
            variant="contained"
            color="secondary"
            onClick={() => navigate('/')}>
            Regresar
          </Button>
        </div>
      </div>
    )
  }
}

export default withStyles(stylesUI)(NotFoundPage)
