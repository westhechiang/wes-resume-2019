import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Flex } from '@westhechiang/flex';
import { Box } from '@westhechiang/box';
import { MainHeader } from '../MainHeader';
import { IconLabel } from '../WorkExperience/components/WorkExperienceHeader/components/IconLabel';

export const Education = () => {
  const {
    json: { education },
  } = useStaticQuery(graphql`
    query {
      json {
        education {
          school
          duration {
            start
            end
          }
          location
          degree
        }
      }
    }
  `);
  return (
    <Flex width={1} height="100%" flexDirection="column" pt={3} px={3}>
      <MainHeader icon="education" text="Education" />
      <Flex
        flexDirection={['column', 'row', 'row']}
        align={['flex-start', 'flex-start', 'center']}
        justifyContent={['center']}
        width={1}
      >
        {Object.entries(education).map((entry) => {
          const label =
            entry[0] === 'duration'
              ? `${entry[1].start} - ${entry[1].end}`
              : entry[1];
          return (
            <Box pb={[2, 2, 0]} key={entry[0]}>
              <IconLabel
                orientation="vertical"
                iconSize={20}
                icon={entry[0]}
                label={label}
              />
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};
