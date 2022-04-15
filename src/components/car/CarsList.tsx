import React from 'react';

import { Box } from '@chakra-ui/react';

import CarCard from './CarCard';

interface CarsListProps {
  carsList: CarDetailsWithIdAndVendor[];
}

const CarsList: React.FC<CarsListProps> = ({ carsList }) => {
  return (
    <Box display="flex" flexDir="column" gap={4}>
      {carsList.map((car) => (
        <CarCard key={`car-${car.id}`} car={car} />
      ))}
    </Box>
  );
};

export default CarsList;
