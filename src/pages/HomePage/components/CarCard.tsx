import React from 'react';

import { returnVendorLogoFromCodeContext } from '../../../shared/utils/returnVendorLogoFromCodeContext';

import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Spacer,
  Text,
} from '@chakra-ui/react';
import CarSpecs from './CarSpecs';

interface CarCardProps {
  car: CarDetails;
}

//TODO@ price tooltip showing estimated amount on top of rate total amount
//TODO@ check if car is available
//TODO@ shorthands for folders

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  console.log(car);

  return (
    <Box
      w="100%"
      p={4}
      display="flex"
      border="1px"
      borderColor="gray.200"
      borderRadius={6}
      alignItems="center"
    >
      <Box w={36}>
        <Image src={car.Vehicle.PictureURL} objectFit="contain" />
      </Box>
      <Box flexGrow={1} marginLeft={4}>
        <Heading as="h2" size="md">
          {car.Vehicle.VehMakeModel['@Name']}
        </Heading>
        <Box display="flex" marginTop={4}>
          <CarSpecs carSpecs={car.Vehicle} />
          <Box>
            <Text>Total price for your trip:</Text>
            <Text>
              {car.TotalCharge['@RateTotalAmount']}{' '}
              {car.TotalCharge['@CurrencyCode']}
            </Text>
            <Button colorScheme="teal" size="sm">
              See details
            </Button>
          </Box>
        </Box>
        <Divider marginY={4} />
        <Box display="flex" alignItems="center">
          <Image
            src={returnVendorLogoFromCodeContext(car.Vehicle['@CodeContext'])}
            h={4}
          />
          <Spacer />
          <Text fontSize="sm" as="i" color="gray.400">
            {car.Vehicle['@Code']}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CarCard;
