---
date: '2018-12-18'
latestUpdateDate: '2019-03-12'
title: 'Ejemplos de sintaxis de código para codea'
author: wootsbot
tags: ['codea']
---

Dejo una guiá para poder insertar snippets de código en tus artículos, no olvides que puedes subir tus artículos de cualquier tecnología que quieras compartir información.

no olvides seguirnos en twitter.

<blockquote class="twitter-tweet" data-lang="es"><p lang="und" dir="ltr"><a href="https://t.co/pbaaQph9xq">https://t.co/pbaaQph9xq</a></p>&mdash; codea (•} (@wootsbot) <a href="https://twitter.com/wootsbot/status/1070200020391981056?ref_src=twsrc%5Etfw">5 de diciembre de 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

##style por defecto

```js
import React from 'react'

import code from 'images/svg/code.svg'
import logo from 'images/svg/logo.svg'

import styles from './styles.module.scss'

function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.footer}>
        <div className={styles.codeaSocial}>
          <div className={styles.social}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/codea_oficial"
              title="Codea Instagram"
              className={styles.redSocial}>
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
          <div>
            © 2019
            <strong> Codea</strong>, all rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
```

##colocar título con el nombre del archivo

###Ejemplo:

    ```js:title=example-file.js

      import React from 'react'

      function Footer() {
      return <footer>...</footer>
      }

      export default Footer
    ```

```js:title=example-file.js
import React from 'react'

function Footer() {
  return <footer>...</footer>
}

export default Footer
```

##colocar syntax con número de líneas

###Ejemplo:

    ```javascript{numberLines: true}
    import React from 'react'
    import PropTypes from 'prop-types'
    ...
    class ArticleLink extends React.PureComponent {
        ...
      }
    export default ArticleLink
    ```

```javascript{numberLines: true}
import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Paper from '@material-ui/core/Paper'

import styles from './styles.module.scss'

class ArticleLink extends React.PureComponent {
  static propTypes = {
    post: PropTypes.object,
  }

  render() {
    const { post } = this.props
    const { frontmatter } = post
    const avatar = frontmatter.author.avatar.childImageSharp.fixed

    return (
      <Paper elevation={0} className={styles.root} component="article">
        <h2 className={styles.title}>
          <Link to={frontmatter.path}>{frontmatter.title}</Link>
        </h2>

        <p className={styles.summary}>{post.excerpt}</p>

        <div className={styles.footer}>
          <Img alt="avatar author" fixed={avatar} className={styles.avatar} />

          <div className={styles.information}>
            <a href="" className={styles.user}>
              {`(@${frontmatter.author.id})`}
            </a>

            <span className={styles.date}>{frontmatter.date}</span>
          </div>
        </div>
      </Paper>
    )
  }
}

export default ArticleLink
```

##colocar syntax con resaltado de líneas

###Ejemplo:

    ``` javascript{1-2,13}{numberLines: true} ... ```

```javascript{1-2,13}{numberLines: true}
import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'

import { getPaths, getPathsActives } from 'utils/paths'

import Brand from './Brand'
import NavItem from './NavItem'
import styles from './styles.module.scss'

const stylesUi = theme => ({
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
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.primary.main,
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
```
