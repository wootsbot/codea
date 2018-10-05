import React from 'react'

import logo from 'static/img/svg/logo.svg'
import code from 'static/img/svg/code.svg'
import heart from 'static/img/svg/heart.svg'
import instagram from 'static/img/svg/instagram.svg'
import twitter from 'static/img/svg/twitter.svg'
import youtube from 'static/img/svg/youtube.svg'
import github from 'static/img/svg/github.svg'

import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.footer}>
        <div className={styles.codea}>
          <img src={code} alt="code" className={styles.code} />
          <span>With</span>
          <img src={heart} alt="code" className={styles.heart} />
          <span>By</span>
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
              href="https://twitter.com/wootsbot"
              title="Codea Twitter"
              className={styles.redSocial}>
              <img src={twitter} alt="twitter" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/wootsbot"
              title="Codea github"
              className={styles.redSocial}>
              <img src={github} alt="github" />
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
