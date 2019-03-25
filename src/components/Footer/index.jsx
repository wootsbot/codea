import React from 'react'

import code from 'images/svg/code.svg'
import logo from 'images/svg/logo.svg'
import heart from 'images/svg/heart.svg'
import github from 'images/svg/github.svg'
import twitter from 'images/svg/twitter.svg'
import instagram from 'images/svg/instagram.svg'

import styles from './styles.module.scss'

function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.footer}>
        <div className={styles.codea}>
          <img src={code} alt="code" className={styles.code} />
          <span>Con</span>
          <img src={heart} alt="code" className={styles.heart} />
          <span>=</span>
          <img src={logo} alt="Logo Codea" className={styles.logo} />
          <strong>Codea</strong>
        </div>

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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/codea_oficial"
              title="Codea Twitter"
              className={styles.redSocial}>
              <img src={twitter} alt="twitter" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/codea-team"
              title="Codea github"
              className={styles.redSocial}>
              <img src={github} alt="github" />
            </a>
          </div>
          <div className={styles.rights}>
            © 2019
            <strong> Codea</strong>, Todos los derechos reservados
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
