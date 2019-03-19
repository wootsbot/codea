import React from 'react'
import { Link } from 'gatsby'

import codeaSrc from 'images/svg/codea-logo.svg'
import styles from './styles.module.scss'

function Brand() {
  return (
    <span className={styles.logo}>
      <Link to="/" className={styles.logoText}>
        <img src={codeaSrc} alt="" className={styles.logoImage} />
        <small style={{ color: '#1a73e8' }}>(beta)</small>
      </Link>
    </span>
  )
}

export default Brand
