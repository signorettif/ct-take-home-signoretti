import React from 'react';

import { Box, Select, Text } from '@chakra-ui/react';
import { carsListSortingOptions } from '../../../hooks/useCarsList';

interface SortCarsProps {
  sort: carsListSortingOptions;
  setSort: React.Dispatch<React.SetStateAction<carsListSortingOptions>>;
}

const SortCars: React.FC<SortCarsProps> = ({ sort, setSort }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value as carsListSortingOptions);
  };

  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      marginY={4}
    >
      <Text as="b">Sort by:</Text>
      <Select
        maxW={64}
        marginLeft={4}
        defaultValue={sort}
        onChange={handleSortChange}
      >
        <option value={carsListSortingOptions.PRICE_LOW_TO_HIGH}>
          Price: Low to High
        </option>
        <option value={carsListSortingOptions.PRICE_HIGH_TO_LOW}>
          Price: High to Low
        </option>
        <option value={carsListSortingOptions.DOORS_LOW_TO_HIGH}>
          Doors: Low to High
        </option>
      </Select>
    </Box>
  );
};

export default SortCars;
