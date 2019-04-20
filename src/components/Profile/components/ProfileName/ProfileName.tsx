import { Flex } from '@westhechiang/flex';
import { Text } from '@westhechiang/text';
import * as React from 'react';

export interface ProfileNameProps {
  nickName: string;
  lastName: string;
}

export const ProfileName = ({ nickName, lastName }: ProfileNameProps) => (
  <Flex w={1} flexDirection="column" alignItems="center" py={2}>
    <Text fontFamily="body" m={0} fontSize={8} textTransform="uppercase">
      {nickName}
    </Text>
    <Text fontFamily="body" m={0} fontSize={6} textTransform="uppercase">
      {lastName}
    </Text>
  </Flex>
);
