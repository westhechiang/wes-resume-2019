import * as React from 'react';
import { Avatar } from '@westhechiang/avatar';
import * as Image from './assets/profile_image.jpg';

export const ProfileImage = () => (
  <Avatar width={125} height={125} src={Image} />
);
