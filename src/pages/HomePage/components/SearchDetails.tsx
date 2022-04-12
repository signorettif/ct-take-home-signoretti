import React from 'react';

import { Box, Button, Heading, Spacer, Text } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

interface SearchDetailsProps {
  fromLocation: string;
  toLocation: string;
  fromDate: string;
  toDate: string;
}

const SearchDetails: React.FC = () => {
  return (
    <Box
      w="100%"
      p={4}
      display="flex"
      borderRadius={5}
      backgroundColor="gray.100"
      alignItems="center"
    >
      <Box>
        <Heading as="h3" size="md">
          Las Vegas
        </Heading>
        <Text>Las Vegas</Text>
      </Box>
      <ChevronRightIcon w={12} h={12} marginX={4} />
      <Box>
        <Heading as="h3" size="md">
          Las Vegas
        </Heading>
        <Text>Las Vegas</Text>
      </Box>
      <Spacer />
      <Button size="lg" disabled colorScheme="teal">
        Edit
      </Button>
    </Box>
  );
};

export default SearchDetails;
