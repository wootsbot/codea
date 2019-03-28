import React from 'react'
import PropTypes from 'prop-types'

import clsx from 'clsx'
import kebabCase from 'lodash/kebabCase'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'

import { PATCH_ARCHIVE_TAGS } from 'utils/paths'

import { VARIANT_BACKGROUND, VARIANT_COLOR } from './constants'

// Like https://github.com/brunobertolini/styled-by
const styledBy = (property, mapping) => props => mapping[props[property]]

const StyledButton = withStyles({
  root: {
    background: styledBy('variantColor', VARIANT_BACKGROUND),
    color: styledBy('variantColor', VARIANT_COLOR),
    margin: '0.4rem',
    boxShadow: 'none',
    '&:hover': {
      background: styledBy('variantColor', VARIANT_BACKGROUND),
      boxShadow: `0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 3px 1px -2px rgba(0, 0, 0, 0.12)`,
    },
  },
})((
  { classes, variantColor, ...other } // eslint-disable-line
) => <Button className={clsx(classes.root)} {...other} />)

class TagButton extends React.PureComponent {
  static propTypes = {
    children: PropTypes.string,
  }

  render() {
    const { children } = this.props

    return (
      <StyledButton
        color="primary"
        size="small"
        variant="contained"
        variantColor={children}
        href={`${PATCH_ARCHIVE_TAGS}${kebabCase(children)}`}>
        {children}
      </StyledButton>
    )
  }
}

export default TagButton
