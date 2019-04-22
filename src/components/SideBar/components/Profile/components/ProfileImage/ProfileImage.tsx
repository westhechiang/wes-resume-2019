import * as React from 'react';
import { Avatar } from '@westhechiang/avatar';
import { Flex } from '@westhechiang/flex';
import * as Image from './assets/profile_image.jpg';

export const ProfileImage = () => (
  <Flex border={2} borderColor="white" borderRadius="50%">
    <Avatar width={125} height={125} src={Image} />
  </Flex>
);
