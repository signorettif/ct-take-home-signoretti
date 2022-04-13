import React, { useState } from 'react';

import {
  Box,
  Divider,
  Heading,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react';

import { returnMinAndMaxPriceFromCarsList } from '../../../shared/utils/returnMinAndMaxPriceFromCarsList';

import useCarsList from '../../../hooks/useCarsList';

interface SidebarProps {
  setCarsFilter: React.Dispatch<React.SetStateAction<CarsFilter>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setCarsFilter }) => {
  const { carsList } = useCarsList();
  const [min, max] = returnMinAndMaxPriceFromCarsList(carsList);

  const [minSelected, setMinSelected] = useState(min);
  const [maxSelected, setMaxSelected] = useState(max);

  const handleSliderChange = ([min, max]: number[]) => {
    setMinSelected(min);
    setMaxSelected(max);
  };

  const handleSliderChangeEnd = ([min, max]: number[]) => {
    setCarsFilter({ minPrice: min, maxPrice: max });
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
    </Box>
  );
};

export default Sidebar;
