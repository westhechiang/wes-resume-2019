import * as React from 'react';
import { Flex } from '@westhechiang/flex';
import { Text } from '@westhechiang/text';

export interface ProfileTitleProps {
  title: string;
}

export const ProfileTitle = ({ title }: ProfileTitleProps) => (
  <Flex width={1} flexDirection="column" alignItems="center" py={2} mb={3}>
    <Text
      fontFamily="body"
      m={0}
      fontSize={3}
      color="white"
      textTransform="uppercase"
    >
      {title}
    </Text>
  </Flex>
);
