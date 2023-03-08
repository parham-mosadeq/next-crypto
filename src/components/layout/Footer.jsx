import { Text, Heading, Box, Container } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();

  return (
    <Container maxW='8xl' textAlign='center'>
      <Text as='p' color='gray.500'>
        parham mosadeqzadeh{' '}
        <Box as='span' color='Highlight'>
          |
        </Box>{' '}
        Front-end developer
      </Text>
      <Text color='gray.400'> &#169; {currentYear}</Text>
    </Container>
  );
};

export default Footer;
