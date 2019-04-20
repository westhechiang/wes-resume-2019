import * as React from 'react';
import { Flex } from '@westhechiang/flex';
import { Box } from '@westhechiang/box';
import { Text } from '@westhechiang/text';
import { Icon } from '../../../Icon';

export const MainHeader = ({ icon, text }) => (
  <Flex width={1} alignItems="flex-start" pb={2}>
    <Box pr={2}>
      <Icon name={icon} width={40} height={40} />
    </Box>
    <Box width={1} borderBottom={1} borderColor="gray" py={1}>
      <Text m={0} fontFamily="body">
        {text}
      </Text>
    </Box>
  </Flex>
);
