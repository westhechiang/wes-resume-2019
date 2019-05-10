import { Box } from '@westhechiang/box';
import * as React from 'react';
import backgroundImage from './assets/backgroundImage.jpg';

export const Background = ({ children }) => (
  <Box
    flexDirection="column"
    bg="white"
    backgroundImage={['none', 'none', `url(${backgroundImage})`]}
    backgroundSize="cover"
    backgroundRepeat="none"
    width={1}
    minHeight="100vh"
    justifyContent="flex-start"
    alignItems="center"
    p={[0, 0, 3]}
  >
    {children}
  </Box>
);
