import React from 'react'
import { Link } from 'gatsby'

import logoCodea from 'images/svg/logo_codea.svg'
import styles from './styles.module.scss'

function Brand() {
  return (
    <span className={styles.logo}>
      <img src={logoCodea} alt="" className={styles.logoImage} />
      <Link to="/" className={styles.logoText}>
        Codea <small style={{ color: '#77ffc7' }}>(beta)</small>
      </Link>
    </span>
  )
}

export default Brand
