import React from 'react'
import { Link } from 'gatsby'

import codeaSrc from 'images/svg/codea_color_v_01.svg'
import styles from './styles.module.scss'

function Brand() {
  return (
    <span className={styles.logo}>
      <img src={codeaSrc} alt="" className={styles.logoImage} />
      <Link to="/" className={styles.logoText}>
        Codea <small style={{ color: '#77ffc7' }}>(beta)</small>
      </Link>
    </span>
  )
}

export default Brand
