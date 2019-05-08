import React from 'react'
import { Link } from 'gatsby'

import codeaSrc from 'images/svg/logo-codea.svg'
import styles from './styles.module.scss'

function Brand() {
  return (
    <span className={styles.logo}>
      <Link to="/" className={styles.logoText}>
        <img src={codeaSrc} alt="" className={styles.logoImage} />
      </Link>
    </span>
  )
}

export default Brand
