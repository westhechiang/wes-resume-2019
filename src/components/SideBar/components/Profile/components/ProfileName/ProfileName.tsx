import { Flex } from '@westhechiang/flex';
import { Text } from '@westhechiang/text';
import * as React from 'react';

export interface ProfileNameProps {
  nickName: string;
  lastName: string;
}

export const ProfileName = ({ nickName, lastName }: ProfileNameProps) => (
  <Flex width={1} flexDirection="column" alignItems="center" py={2}>
    <Text
      fontFamily="body"
      m={0}
      fontSize={9}
      color="white"
      fontWeight="bold"
      letterSpacing="7px"
      textTransform="uppercase"
    >
      {nickName}
    </Text>
    <Text
      color="white"
      fontFamily="body"
      m={0}
      fontSize={6}
      textTransform="uppercase"
    >
      {lastName}
    </Text>
  </Flex>
);
