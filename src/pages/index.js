import React from 'react'
import { Link } from 'gatsby'

import Button from '@material-ui/core/Button'

import Layout from 'pages/Layout'

const IndexPage = () => (
  <Layout
    title="Codea.com.mx"
    meta={{
      description: 'codea un blog de un buem programador',
      keywords: 'javascript, blog',
    }}>
    <Button variant="contained" color="primary">
      Default
    </Button>
  </Layout>
)

export default IndexPage
