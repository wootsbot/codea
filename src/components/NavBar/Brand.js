import React from 'react'
import { Link } from 'gatsby'

import logo from 'static/codeaWhite.svg'
import styles from './NavBar.module.scss'

function Brand() {
  return (
    <span className={styles.logo}>
      <img src={logo} alt="" className={styles.logoImage} />
      <Link to="/" className={styles.logoText}>
        Codea
      </Link>
    </span>
  )
}

export default Brand
