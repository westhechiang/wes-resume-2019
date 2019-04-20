import { Flex } from '@westhechiang/flex';
import * as React from 'react';

export const Paper = ({ children }) => (
  <Flex
    bg="white"
    boxShadow="rgba(0, 0, 0, 0.2) 0px 6px 14px;"
    flexDirection="column"
    w={[1, 1, 794]}
    minWidth={[1, 1, 794]}
    height={['100%', '100%', 1122]}
    position="relative"
    shadow
    hoverShadow
  >
    {children}
  </Flex>
);
