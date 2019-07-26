import React from 'react';

import Button from '@material-ui/core/Button';

import SEO from 'components/seo';
import Layout from 'components/Layout';

const IndexPage = () => (
  <Layout>
    <SEO title="codea.dev" />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quos quod voluptate mollitia odit dolores porro
    error ullam distinctio repellat? Praesentium commodi tempore voluptates error nostrum nam odit obcaecati id.
    <h1>Hi people</h1>
    <Button variant="contained" color="primary">
      Primary
    </Button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
);

export default IndexPage;
