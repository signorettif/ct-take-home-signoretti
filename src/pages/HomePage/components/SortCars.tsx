import React from "react";

import { Box, Select, Text } from "@chakra-ui/react";
import { CarsListSortingOptions } from "constants/cars";

interface SortCarsProps {
  sort: CarsListSortingOptions;
  setSort: React.Dispatch<React.SetStateAction<CarsListSortingOptions>>;
}

const SortCars: React.FC<SortCarsProps> = ({ sort, setSort }) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value as CarsListSortingOptions);
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
        <option value={CarsListSortingOptions.PRICE_LOW_TO_HIGH}>
          Price: Low to High
        </option>
        <option value={CarsListSortingOptions.PRICE_HIGH_TO_LOW}>
          Price: High to Low
        </option>
        <option value={CarsListSortingOptions.DOORS_LOW_TO_HIGH}>
          Doors: Low to High
        </option>
      </Select>
    </Box>
  );
};

export default SortCars;
