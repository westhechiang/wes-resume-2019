import { Box } from '@westhechiang/box';
import * as React from 'react';
import BackgroundImage from './assets/BackgroundImage.png';

export const Background = ({ children }) => (
  <Box
    flexDirection="column"
    bg="white"
    backgroundImage={`url(${BackgroundImage})`}
    w={1}
    minHeight="100vh"
    justify="flex-start"
    align="center"
    p={[0, 0, 3]}
  >
    {children}
  </Box>
);
