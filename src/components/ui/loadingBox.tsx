import { Box, Spinner } from '@chakra-ui/react';
import React from 'react';

const LoadingBox: React.FC = () => (
  <Box
    w="100%"
    maxW="500px"
    border="1px"
    borderColor="gray.200"
    h="500px"
    borderRadius={6}
    marginX="auto"
    marginTop={16}
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="teal.400"
      size="xl"
    />
  </Box>
);
export default LoadingBox;
