import React from 'react'
import PropTypes from 'prop-types'

import kebabCase from 'lodash/kebabCase'
import { navigate } from 'gatsby-link'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'

import TagLink from 'components/TagLink'

import styles from './styles.module.scss'

class TagLinkList extends React.PureComponent {
  state = {
    anchorEl: null,
  }

  static propTypes = {
    tags: PropTypes.array.isRequired,
  }

  handleNavigate(path) {
    navigate(`/archive-tags/${kebabCase(path)}`)
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    const { tags } = this.props
    const tagsSlice = tags.slice(0, 5)

    return (
      <div className={styles.root}>
        <ul className={styles.tags}>
          <div className={styles.tagsItem}>
            {tagsSlice.map(item => (
              <TagLink
                to={`/archive-tags/${kebabCase(item.node.id)}`}
                key={item.node.id}>
                {item.node.id}
              </TagLink>
            ))}
          </div>

          <Button
            variant="outlined"
            color="primary"
            aria-owns={open ? 'fade-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}>
            Más etiquetas
          </Button>

          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
            TransitionComponent={Fade}>
            <MenuItem onClick={() => this.handleNavigate('/tgas')}>
              Ver todas
            </MenuItem>

            {tags.map(item => (
              <MenuItem
                key={item.node.id}
                onClick={() => this.handleNavigate(item.node.id)}>
                {item.node.id}
              </MenuItem>
            ))}
          </Menu>
        </ul>
      </div>
    )
  }
}

export default TagLinkList
