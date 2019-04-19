import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`]}
    />
  </Layout>
);

export default IndexPage;
