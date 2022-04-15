import React from 'react';
import dayjs from 'dayjs';

import { Box, Heading, Text } from '@chakra-ui/react';

interface PickUpOrReturnLocation {
  '@Name': string;
}

interface SearchLocationDateTimeProps {
  loc: PickUpOrReturnLocation;
  dateTime: string;
}

const SearchLocationDateTime: React.FC<SearchLocationDateTimeProps> = ({
  loc,
  dateTime,
}) => (
  <Box>
    <Heading as="h3" size="md">
      {loc['@Name']}
    </Heading>
    <Text>{dayjs(dateTime).format('ddd DD MMM YYYY, HH:mm')}</Text>
  </Box>
);

export default SearchLocationDateTime;
