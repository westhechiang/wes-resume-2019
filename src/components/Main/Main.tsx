import * as React from 'react';
import { Flex } from '@westhechiang/flex';
import { WorkExperience } from './components/WorkExperience';
import { Education } from './components/Education';
import MobileBackgroundImage from './assets/mobile_pattern.png';

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
