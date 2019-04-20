import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Flex } from '@westhechiang/flex';
import { MainHeader } from '../MainHeader';

export const WorkExperience = () => {
  const {
    json: { experience },
  } = useStaticQuery(graphql`
    query {
      json {
        experience {
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
  console.log('experience', experience);
  return (
    <Flex width={1} height="100%" flexDirection="column" p={3}>
      <MainHeader icon="work" text="Work Experience" />
    </Flex>
  );
};
