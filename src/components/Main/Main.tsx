import * as React from 'react';
import { Flex } from '@westhechiang/flex';
import { WorkExperience } from './components/WorkExperience';
import { Education } from './components/Education';

export const Main = () => (
  <Flex
    width={1}
    height="100%"
    flexDirection="column"
  >
    <WorkExperience />
    <Education />
  </Flex>
);
