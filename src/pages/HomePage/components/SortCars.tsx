import React from 'react';

import { Box, Select, Text } from '@chakra-ui/react';

interface SortCarsProps {}

const SortCars: React.FC = ({}: SortCarsProps) => {
  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      marginY={4}
    >
      <Text as="b">Sort by:</Text>
      <Select maxW={64} marginLeft={4}>
        <option value="price_low_to_high" selected>
          Price: Low to High
        </option>
        <option value="price_high_to_low">Price: High to Low</option>
        <option value="passenger_quantity">Passengers Quantity</option>
      </Select>
    </Box>
  );
};

export default SortCars;
