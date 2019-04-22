import { Box } from '@westhechiang/box';
import * as React from 'react';
import BackgroundImage from './assets/pattern.png';

export const Background = ({ children }) => (
  <Box
    flexDirection="column"
    bg="white"
    backgroundImage={['none', 'none', `url(${BackgroundImage})`]}
    backgroundSize="300px"
    backgroundRepeat="repeat"
    width={1}
    minHeight="100vh"
    justifyContent="flex-start"
    alignItems="center"
    p={[0, 0, 3]}
  >
    {children}
  </Box>
);
