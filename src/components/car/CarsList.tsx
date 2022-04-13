import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

import CarCard from './CarCard';

interface CarsListProps {}

const cars = require('../../constants/cars.json')[0]['VehAvailRSCore'][
  'VehVendorAvails'
];

const CarsList: React.FC = ({}: CarsListProps) => {
  const [carsToDisplay, setCarsToDisplay] = useState(cars);

  //TODO@ improve types here
  return (
    <Box display="flex" flexDir="column" gap={4}>
      {carsToDisplay.map((vendor: { [x: string]: any }) =>
        vendor['VehAvails'].map((car: { [x: string]: any }, i: number) => (
          <CarCard
            key={`car-${vendor['Vendor']['@Code']}-${i}`}
            car={car as CarDetails}
            vendorCode={vendor['Vendor']['@Code']}
          />
        ))
      )}
    </Box>
  );
};

export default CarsList;
