import * as React from 'react';
import { Flex } from '@westhechiang/flex';
import { Text } from '@westhechiang/text';
import { Link } from '@westhechiang/link';

import { Icon } from '../../../../../Icon';

export interface ProfileContactProps {
  contact: {
    email: string;
    github: string;
    linkedIn: string;
    location: string;
  };
}

export const ProfileContact = ({ contact }: ProfileContactProps) => (
  <Flex flexDirection="column" width={1}>
    {Object.entries(contact).map((entry) => {
      return (
        <Flex
          key={entry[0]}
          w={1}
          pb={2}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Icon name={entry[0]} width={[30, 20]} mr={2} />
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Text
              fontFamily="body"
              fontSize={1}
              color="white"
              m={0}
              textTransform="uppercase"
            >
              {entry[0]}
            </Text>
            <Text fontFamily="body" fontSize={2} color="white" m={0}>
              {entry[1].indexOf('https://') !== -1 ? (
                <Link
                  href={entry[1]}
                  color="white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {entry[1]}
                </Link>
              ) : (
                entry[1]
              )}
            </Text>
          </Flex>
        </Flex>
      );
    })}
  </Flex>
);
