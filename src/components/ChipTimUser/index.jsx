import React from 'react'
import PropTypes from 'prop-types'

import { navigate } from 'gatsby'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'

import avatarImage from 'static/img/codea.png'

const styles = theme => ({
  root: {
    backgroundColor: '#fff',
  },
  clickable: {
    WebkitTapHighlightColor: 'transparent', // Remove grey highlight
    cursor: 'pointer',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.secondary.dark,
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: theme.palette.secondary.dark,
    },
  },
})

class ChipTimUser extends React.PureComponent {
  static propTypes = {
    classes: PropTypes.object,
    avatar: PropTypes.string,
    label: PropTypes.string,
    clickable: PropTypes.bool,
    to: PropTypes.string,
  }

  render() {
    const { classes, avatar, label, clickable, to } = this.props
    return (
      <Chip
        onClick={() => navigate(to)}
        clickable={clickable || Boolean(to)}
        classes={{ root: classes.root, clickable: classes.clickable }}
        avatar={<Avatar alt={label} src={avatar} />}
        label={label}
      />
    )
  }
}

ChipTimUser.defaultProps = {
  clickable: false,
}

export default withStyles(styles)(ChipTimUser)
