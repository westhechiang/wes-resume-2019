import * as React from 'react';
import { Text } from '@westhechiang/text';
import { Flex } from '@westhechiang/flex';
import { Icon } from '../../../../../../../Icon';

export const IconLabel = ({ icon, label, orientation, iconSize }) => (
  <Flex
    pr={3}
    alignItems="center"
    flexDirection={orientation === 'horizontal' ? 'row' : 'column'}
  >
    <Icon
      name={icon}
      width={iconSize}
      height={iconSize}
      mr={1}
      mb={orientation === 'horizontal' ? 0 : 1}
    />
    <Text m={0} fontFamily="body" fontSize={2}>
      {label}
    </Text>
  </Flex>
);

IconLabel.defaultProps = {
  orientation: 'horizontal',
  iconSize: 15,
};
