import React from 'react';

import { Link } from 'react-router-dom';
import { Box, Image } from '@chakra-ui/react';

import ContentContainer from './ContentContainer';

const Header: React.FC = () => {
  return (
    <Box w="100%" h={16} backgroundColor="gray.800">
      <ContentContainer h="100%">
        <Link to="/">
          <Image
            h="100%"
            w="auto"
            maxW={32}
            src="/images/ct-logo-light.svg"
            cursor="pointer"
          />
        </Link>
      </ContentContainer>
    </Box>
  );
};

export default Header;
