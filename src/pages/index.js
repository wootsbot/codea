import React from 'react';

import Button from '@material-ui/core/Button';

import SEO from 'components/seo';

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <h1>Hi people</h1>

    <Button variant="contained" color="primary">
      Primary
    </Button>

    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </div>
);

export default IndexPage;
