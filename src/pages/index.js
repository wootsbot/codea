import React from 'react'
import { Link } from 'gatsby'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Layout from 'pages/Layout'

const IndexPage = () => (
  <Layout
    title="Codea"
    meta={{
      description: 'codea un blog de un buem programador',
      keywords: 'javascript, blog',
    }}>
    <Grid container alignItems="center" direction="column" justify="center">
      <Grid item sm={12}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, iusto
        quod expedita amet atque omnis velit voluptates quae ratione nisi ea
        quibusdam ipsam consequatur laboriosam commodi deserunt nobis enim?
        Repudiandae?
      </Grid>
    </Grid>
  </Layout>
)

export default IndexPage
