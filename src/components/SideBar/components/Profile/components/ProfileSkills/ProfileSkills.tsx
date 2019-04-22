import * as React from 'react';
import { Flex } from '@westhechiang/flex';
import { Text } from '@westhechiang/text';
import { Box } from '@westhechiang/box';

export interface ProfileSkillsProps {
  skills: {
    languages: string[];
    database: string[];
    technologies: string[];
    hobbies: string[];
  };
}

export const ProfileSkills = ({ skills }: ProfileSkillsProps) => (
  <Flex width={1} pt={3} flexDirection="column" alignItems="center">
    {Object.keys(skills).map((category) => {
      return (
        <Flex
          key={category}
          width={1}
          alignItems={['flex-start', 'center', 'flex-start']}
          flexDirection="column"
        >
          <Text
            fontFamily="body"
            color="white"
            fontSize={2}
            m={0}
            textTransform="capitalize"
          >
            {`${category}: `}
          </Text>
          <Flex
            key={category}
            flexWrap="wrap"
            mb={2}
            flexShrink="0"
            alignItems={['flex-start', 'center', 'flex-start']}
          >
            {skills[category].map((item: string[]) => {
              return (
                <Box
                  key={item}
                  borderRadius="5px"
                  border={1}
                  borderColor="white"
                  py="3px"
                  px={2}
                  mt={1}
                  mr={1}
                >
                  <Text
                    m={0}
                    fontWeight="bold"
                    fontFamily="body"
                    color="white"
                    fontSize={1}
                  >
                    {item}
                  </Text>
                </Box>
              );
            })}
          </Flex>
        </Flex>
      );
    })}
  </Flex>
);
