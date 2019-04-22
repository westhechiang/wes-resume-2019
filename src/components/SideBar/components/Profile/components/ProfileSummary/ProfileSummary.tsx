import * as React from 'react';
import { Flex } from '@westhechiang/flex';
import { Text } from '@westhechiang/text';
import { Box } from '@westhechiang/box';

export interface ProfileSummaryProps {
  highlight: string;
  details: string[];
}

export const ProfileSummary = ({ highlight, details }: ProfileSummaryProps) => (
  <Flex
    flexDirection="column"
    alignItems={['flex-start', 'center', 'flex-start']}
    pt={2}
    width={1}
  >
    <Text
      m={0}
      mb={3}
      width={1}
      textAlign={['left', 'center', 'left']}
      fontStyle="italic"
      fontFamily="body"
      fontSize={3}
      fontWeight={200}
      color="white"
    >
      {highlight}
    </Text>
    <Text fontSize={2} fontFamily="body" color="white" m={0} mb={1}>
      I am:
    </Text>
    {details.map((detail, index, arr) => {
      return (
        <Flex
          key={detail.slice(0, 5)}
          width={1}
          flexDirection="column"
          flexShrink="0"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text
            width={1}
            fontSize={3}
            fontFamily="body"
            m={0}
            textAlign={['left', 'center', 'left']}
            color="white"
          >
            {detail}
          </Text>
          {!(arr.length - 1 === index) && <Box height={10} width={1} />}
        </Flex>
      );
    })}
  </Flex>
);
