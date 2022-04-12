import React from 'react';

import { Box, ChakraProvider } from '@chakra-ui/react';

import HomePage from '../../pages/HomePage/HomePage';

const AppEntryPoint: React.FC = () => (
  <ChakraProvider>
    <Box w="100%" h="32px">
      <HomePage />
    </Box>
  </ChakraProvider>
);
export default AppEntryPoint;
