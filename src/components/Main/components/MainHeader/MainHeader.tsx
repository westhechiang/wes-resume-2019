import * as React from 'react';
import { Flex } from '@westhechiang/flex';
import { Box } from '@westhechiang/box';
import { Text } from '@westhechiang/text';
import { Icon } from '../../../Icon';

export const MainHeader = ({ icon, text }) => (
  <Flex width={1} alignItems="flex-start" pb={2}>
    <Box pr={2}>
      <Flex
        justifyContent="center"
        alignItems="center"
        border={1}
        borderColor="accentColor"
        borderRadius="50%"
        width={40}
        height={40}
      >
        <Icon
          border={1}
          borderColor="black"
          height={30}
          name={icon}
          width={30}
        />
      </Flex>
    </Box>
    <Box width={1} borderBottom={1} borderColor="accentColor" py={1}>
      <Text
        m={0}
        fontFamily="body"
        textTransform="uppercase"
        fontWeight="bold"
        color="accentColor"
      >
        {text}
      </Text>
    </Box>
  </Flex>
);
