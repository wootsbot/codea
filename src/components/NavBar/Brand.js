import React from 'react'
import { Link } from 'gatsby'

import logoCodea from 'static/images/svg/logo_codea.svg'
import styles from './NavBar.module.scss'

function Brand() {
  return (
    <span className={styles.logo}>
      <img src={logoCodea} alt="" className={styles.logoImage} />
      <Link to="/" className={styles.logoText}>
        Codea
      </Link>
    </span>
  )
}

export default Brand
