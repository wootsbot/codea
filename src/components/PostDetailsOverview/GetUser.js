import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.scss'

type ArgumentsType = {
  firsName?: string,
  user?: string,
  date: string,
  biography?: string,
}

function GetUser({ firsName, user, date, biography }: ArgumentsType) {
  return (
    <div className={styles.information}>
      <span className={styles.author}>
        Jorge Luis Calleja
        <a href="" className={styles.user}>
          (@Woostbot)
        </a>
      </span>

      <p className={styles.summary}>
        Developer Frontend/Javascript me apaciona la Web actualmente llevo 3
        años desarrolalndo en react js
      </p>

      <span className={styles.date}>{date}</span>
    </div>
  )
}

export default GetUser
