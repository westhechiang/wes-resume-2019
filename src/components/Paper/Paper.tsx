import { Flex } from '@westhechiang/flex';
import * as React from 'react';

export const Paper = ({ children }) => (
  <Flex
    bg="white"
    boxShadow="rgba(0, 0, 0, 0.2) 0px 6px 14px;"
    flexDirection="column"
    width={[1, 1, 794]}
    maxWidth={['100%', '100%', 794]}
    height={['100%']}
    position="relative"
    shadow
    hoverShadow
  >
    {children}
  </Flex>
);
