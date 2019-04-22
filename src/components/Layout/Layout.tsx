import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Background } from '../Background';

import { Flex } from '@westhechiang/flex';

import { Theme } from '../../Theme';
import { Blurb } from '../Blurb';

export const Layout = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <>
      <Normalize />
      <Background>
        <Flex
          width={1}
          minHeight="100vh"
          justifyContent="center"
          alignItems="center"
          boxSizing="border-box"
          flexDirection="column"
        >
          {children}
        </Flex>
        <Blurb />
      </Background>
    </>
  </ThemeProvider>
);
