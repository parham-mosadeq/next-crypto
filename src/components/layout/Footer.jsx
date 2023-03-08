import { Text, Heading, Box } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear().toString();

  return (
    <Heading
      as='h2'
      textAlign='center'
      fontSize={15}
      textTransform='capitalize'
      bg='whitesmoke'
      // width={[
      //   // '15%', // 62em+
      //   // '25%', // 48em-62em
      //   // '50%', // 30em-48em
      //   '100%', // 0-30em
      // ]}
      maxW='container.xl'
      p={0}
      m={0}
    >
      <Text as='p' color='gray.500'>
        parham mosadeqzadeh{' '}
        <Box as='span' color='Highlight'>
          |
        </Box>{' '}
        Front-end developer
      </Text>
      <Text color='gray.400'> &#169; {currentYear}</Text>
    </Heading>
  );
};

export default Footer;
