import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Flex } from '@westhechiang/flex';
import { MainHeader } from '../MainHeader';

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
  console.log('education', education);
  return (
    <Flex width={1} height="100%" flexDirection="column" p={3}>
      <MainHeader icon="education" text="Education" />
    </Flex>
  );
};
