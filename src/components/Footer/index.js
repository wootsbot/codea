import React from 'react'

import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'

import logo from 'static/img/logo.svg'
import avatarImage from 'static/img/codea.png'
import favicon from 'static/img/favicon.png'

import ChipTimUser from 'components/ChipTimUser'
import LinkToPages from 'components/LinkToPages'

import styles from './footer.module.scss'

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <img src={logo} alt="Logo Codea" className={styles.logoLarge} />

        <Grid container direction="column" justify="center" alignItems="center">
          <h3 className={styles.footerTitle}>
            {'<>'} El Equipo de Desarrolladores
          </h3>

          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={8}>
            <Grid item>
              <ChipTimUser
                avatar={avatarImage}
                label="Fundador - Jorge Luis C.A."
              />
            </Grid>

            <Grid item>
              <ChipTimUser
                avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXAtSnzzXnora_SK7reEo4FRMn_YlLMDyPNky388_hgJeGE_4XA"
                label="Colaborador"
              />
            </Grid>

            <Grid item>
              <ChipTimUser
                avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNefPguvgnns6y3xKocnemZOZpBTf8b21tELPhHHAytlqAFsyJA"
                label="Colaborador"
              />
            </Grid>

            <Grid item>
              <ChipTimUser
                avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjgPkIBECBIjsA0OD0aX_nxXp_tWVEqwiB_tDVPZPjgAvz7N6"
                label="Colaborador"
              />
            </Grid>
          </Grid>
        </Grid>

        <div className={styles.footerLinksRoot}>
          <div className={styles.footerLinksContainer}>
            <h5 className={styles.footerLinksTitle}>Comunidad</h5>

            <div className={styles.footerLinks}>
              <div className={styles.footerLinksItem}>
                <LinkToPages to="/test/">
                  Ver la lista de los colavoradores
                </LinkToPages>
              </div>

              <div className={styles.footerLinksItem}>
                <LinkToPages to="/test/">Quiero mandar un post</LinkToPages>
              </div>

              <div className={styles.footerLinksItem}>
                <LinkToPages to="/">Como puedo ser colavorador</LinkToPages>
              </div>

              <div className={styles.footerLinksItem}>
                <LinkToPages to="/">Quiero donar</LinkToPages>
              </div>
            </div>
          </div>

          <div className={styles.footerLinksContainer}>
            <h5 className={styles.footerLinksTitle}>Codea</h5>

            <div className={styles.footerLinks}>
              <div className={styles.footerLinksItem}>
                <LinkToPages to="/">Como ser un patrosinador</LinkToPages>
              </div>

              <div className={styles.footerLinksItem}>
                <LinkToPages to="/">
                  Quiero poner un anuncio de mi marca
                </LinkToPages>
              </div>

              <div className={styles.footerLinksItem}>
                <LinkToPages to="/">Como ser un patrosinador</LinkToPages>
              </div>

              <div className={styles.footerLinksItem}>
                <LinkToPages to="/">Que es codea</LinkToPages>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerDown}>
        © 2019 <img src={logo} alt="Logo Codea" className={styles.logo} />
        <strong>Codea</strong>, all rights reserved
      </div>
    </footer>
  )
}

export default Footer
