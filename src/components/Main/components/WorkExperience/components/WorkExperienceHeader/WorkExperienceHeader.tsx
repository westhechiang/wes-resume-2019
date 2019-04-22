import * as React from 'react';
import { Image } from '@westhechiang/image';
import { Flex } from '@westhechiang/flex';
import { Text } from '@westhechiang/text';
import { IconLabel } from './components/IconLabel';
import { Icon } from '../../../../../Icon';

export const WorkExperienceHeader = ({
  title,
  location,
  company,
  duration,
}) => (
  <Flex flexDirection="column" pb={2}>
    <Flex
      alignItems="flex-start"
      justifyContent={['space-between']}
      flexDirection={['column', 'row']}
      width={1}
      pb={1}
    >
      <Flex alignItems="center">
        <Icon name="star" width={15} height={15} mr={1} pb={[1, 0]} />
        <Flex
          alignItems={['flex-start', 'flex-start', 'center']}
          flexDirection={['column', 'column', 'row']}
          pb={[1, 0]}
        >
          <Text
            fontFamily="body"
            fontSize={2}
            textTransform="uppercase"
            fontWeight="bold"
            letterSpacing="3px"
            m={0}
          >
            {title}
          </Text>
        </Flex>
      </Flex>
      <IconLabel icon="clock" label={`${duration.start} - ${duration.end}`} />
    </Flex>
    <Flex
      alignItems={['flex-start', 'flex-start', 'center']}
      flexDirection={['column', 'column', 'row']}
    >
      <IconLabel icon="location" label={`${company}, ${location}`} />
    </Flex>
  </Flex>
);
