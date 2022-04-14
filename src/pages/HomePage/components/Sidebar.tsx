import React, { useState } from "react";

import {
  Box,
  Checkbox,
  Divider,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";

import { returnMinAndMaxPriceFromCarsList } from '../../../utils/returnMinAndMaxPriceFromCarsList';

import useCarsList from '../../../hooks/useCarsList';
import { VENDORS } from '../../../constants/constants';
import { toggleItemFromStringArray } from '../../../utils/toggleItemFromArray';

interface SidebarProps {
  setCarsFilter: React.Dispatch<React.SetStateAction<CarsFilter>>;
  filter: CarsFilter;
}

const Sidebar: React.FC<SidebarProps> = ({ setCarsFilter, filter }) => {
  const { carsList } = useCarsList();
  const [min, max] = returnMinAndMaxPriceFromCarsList(carsList);

  const [minSelected, setMinSelected] = useState(min);
  const [maxSelected, setMaxSelected] = useState(max);

  const handleSliderChange = ([min, max]: number[]) => {
    setMinSelected(min);
    setMaxSelected(max);
  };

  const handleSliderChangeEnd = ([min, max]: number[]) => {
    setCarsFilter((prevFilter) => ({
      ...prevFilter,
      minPrice: min,
      maxPrice: max,
    }));
  };

  const toggleVendorFromFilter = (vendor: string) => {
    setCarsFilter((prevFilter) => ({
      ...prevFilter,
      vendorsList: toggleItemFromStringArray(prevFilter.vendorsList, vendor),
    }));
  };

  return (
    <Box w="300px" p={4} border="1px" borderColor="gray.200" borderRadius={6}>
      <Heading as="h2" size="md">
        Filter
      </Heading>

      <Divider marginY={6} />

      <Box>
        <Heading as="h3" size="sm">
          Price range
        </Heading>

        <RangeSlider
          marginTop={4}
          defaultValue={[min, max]}
          min={min}
          max={max}
          step={20}
          onChange={handleSliderChange}
          onChangeEnd={handleSliderChangeEnd}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack bg="teal.400" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>

        <Text fontSize="sm">{`${minSelected} $ - ${maxSelected} $`}</Text>
      </Box>

      <Divider marginY={6} />

      <Box>
        <Heading as="h3" size="sm">
          Vendors
        </Heading>

        {VENDORS.map((vendor, i) => (
          <Checkbox
            width="100%"
            marginTop={4}
            size="lg"
            colorScheme="teal"
            isChecked={filter.vendorsList.indexOf(vendor) > -1}
            onChange={() => toggleVendorFromFilter(vendor)}
            key={`vendor-${i}`}
          >
            <Text fontSize="sm">{vendor}</Text>
          </Checkbox>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
