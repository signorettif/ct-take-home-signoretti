import React from 'react';

import { Box, Button, Spacer } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import SearchLocationDateTime from './SearchLocation';

interface PickUpOrReturnLocation {
  '@Name': string;
}
interface SearchDetailsProps {
  PickUpLocation: PickUpOrReturnLocation;
  ReturnLocation: PickUpOrReturnLocation;
  PickUpDateTime: string;
  ReturnDateTime: string;
}

const SearchDetails: React.FC<SearchDetailsProps> = ({
  PickUpLocation,
  ReturnLocation,
  PickUpDateTime,
  ReturnDateTime,
}) => (
  <Box
    w="100%"
    p={4}
    display="flex"
    borderRadius={6}
    backgroundColor="gray.100"
    alignItems="center"
  >
    <SearchLocationDateTime loc={PickUpLocation} dateTime={PickUpDateTime} />
    <ChevronRightIcon w={12} h={12} marginX={4} />
    <SearchLocationDateTime loc={ReturnLocation} dateTime={ReturnDateTime} />

    <Spacer />

    <Button size="lg" disabled colorScheme="teal">
      Edit
    </Button>
  </Box>
);

export default SearchDetails;
