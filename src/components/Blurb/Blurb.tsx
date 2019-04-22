import React from 'react';
import { Text } from '@westhechiang/text';
import { Flex } from '@westhechiang/flex';
import { Link } from '@westhechiang/link';

export const Blurb = () => {
  const linkBuilder = (link: string) => {
    const links = {
      react: {
        label: 'React',
        href: 'https://reactjs.org/',
      },
      gatsby: {
        label: 'GatsbyJS',
        href: 'https://www.gatsbyjs.org/',
      },
      styledComponents: {
        label: 'Styled Components',
        href: 'https://www.styled-components.com/',
      },
      styledSystem: {
        label: 'Styled System',
        href: 'https://styled-system.com/',
      },
      repo: {
        label: 'here',
        href: 'https://github.com/westhechiang/wes-resume-2019',
      },
    };

    return (
      <Link
        rel="noopener noreferrer"
        href={links[link].href}
        target="_blank"
        color="white"
        fontWeight="bold"
        fontStyle="italic"
      >
        {links[link].label}
      </Link>
    );
  };

  return (
    <Flex
      w={1}
      justify="center"
      py={1}
      px={2}
      mt={2}
      bg="teal"
      borderRadius={10}
    >
      <Text m={0} color="white" fontFamily="body" fontSize={2}>
        Made by Wes Chiang, built with {linkBuilder('gatsby')} (
        {linkBuilder('react')}), {linkBuilder('styledComponents')} and{' '}
        {linkBuilder('styledSystem')}. Check out the code {linkBuilder('repo')}.
      </Text>
    </Flex>
  );
};

export default Blurb;
