import { Flex } from '@westhechiang/flex';
import * as React from 'react';
import { Profile } from '../Profile';

export const SideBar = () => (
  <Flex
    height="100%"
    width={[1, 1, 0.3]}
    bg="red"
    flexDirection="column"
    alignItems="center"
    p={3}
  >
    <Profile />
  </Flex>
);
