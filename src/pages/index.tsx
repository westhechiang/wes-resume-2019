import { Flex } from '@westhechiang/flex';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { Paper } from '../components/Paper';
import { Seo } from '../components/Seo';
import { SideBar } from '../components/SideBar';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={['gatsby', 'application', 'react']} />
    <Paper>
      <Flex
        align="flex-start"
        flexDirection={['column', 'column', 'row']}
        height="100%"
      >
        <SideBar />
        hello
      </Flex>
    </Paper>
  </Layout>
);

export default IndexPage;
