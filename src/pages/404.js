import React from 'react'
import Layout from 'components/Layout'

import Image from 'static/404.svg'

import styles from './404.module.scss'

const NotFoundPage = () => (
  <div style={{ backgroundImage: `url(${Image})` }} className={styles.root}>
    no fund
  </div>
)

export default NotFoundPage
