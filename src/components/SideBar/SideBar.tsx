import { Flex } from '@westhechiang/flex';
import * as React from 'react';
import { Profile } from './components/Profile';

export const SideBar = () => (
  <Flex
    height="100%"
    width={[1, 1, 0.3]}
    bg="teal"
    flexDirection="column"
    alignItems="center"
    p={15}
  >
    <Profile />
  </Flex>
);
