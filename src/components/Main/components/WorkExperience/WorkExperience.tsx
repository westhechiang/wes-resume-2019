import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Text } from '@westhechiang/text';
import { Flex } from '@westhechiang/flex';
import { MainHeader } from '../MainHeader';
import { WorkExperienceHeader } from './components/WorkExperienceHeader';

export const WorkExperience = () => {
  const {
    json: { experience: experiences },
  } = useStaticQuery(graphql`
    query {
      json {
        experience {
          id
          title
          location
          company
          duration {
            start
            end
          }
          accomplishments
        }
      }
    }
  `);
  return (
    <Flex width={1} height="100%" flexDirection="column" px={3} pt={3}>
      <MainHeader icon="work" text="Work Experience" />
      {experiences.map((experience, index) => {
        return (
          <Flex
            key={experience.id}
            flexDirection="column"
            pb={experiences.length - 1 === index ? 0 : 3}
          >
            <WorkExperienceHeader
              title={experience.title}
              location={experience.location}
              company={experience.company}
              duration={experience.duration}
            />
            <Flex flexDirection="column">
              {experience.accomplishments.map((accomplishment) => {
                return (
                  <Flex
                    key={accomplishment}
                    alignItems="center"
                    justifyContent="flex-start"
                    borderLeft={2}
                    borderColor="teal"
                    mb={2}
                  >
                    <Text fontFamily="body" fontSize={2} m={0} pl={1}>
                      {accomplishment}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};
