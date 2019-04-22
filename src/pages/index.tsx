import { Flex } from '@westhechiang/flex';
import * as React from 'react';
import { Layout } from '../components/Layout';
import { Paper } from '../components/Paper';
import { Seo } from '../components/Seo';
import { SideBar } from '../components/SideBar';
import { Main } from '../components/Main';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={['gatsby', 'application', 'react']} />
    <Paper>
      <Flex
        alignItems="flex-start"
        flexDirection={['column', 'column', 'row']}
        height="100%"
      >
        <SideBar />
        <Main />
      </Flex>
    </Paper>
  </Layout>
);

export default IndexPage;
