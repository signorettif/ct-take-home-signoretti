import React from 'react';

import { returnVendorLogoFromCodeContext } from '../../utils/returnVendorLogoFromCodeContext';

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
import { useNavigate } from 'react-router-dom';

interface CarCardProps {
  car: CarDetailsWithIdAndVendor;
  hiddenDetailsButton?: boolean;
}

//TODO@ price tooltip showing estimated amount on top of rate total amount
//TODO@ check if car is available
//TODO@ shorthands for folders

const CarCard: React.FC<CarCardProps> = ({
  car,
  hiddenDetailsButton = false,
}) => {
  let navigate = useNavigate();

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

          <Box
            width="50%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Text fontSize="xs">Total price for your trip:</Text>

            <Text as="b">
              {car.TotalCharge['@RateTotalAmount']}{' '}
              {car.TotalCharge['@CurrencyCode']}
            </Text>

            {!hiddenDetailsButton && (
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => navigate(`/car/${car.id}`)}
                marginTop={4}
              >
                See details
              </Button>
            )}
          </Box>
        </Box>
        <Divider marginY={4} />
        <Box display="flex" alignItems="center">
          <Image src={returnVendorLogoFromCodeContext(car.vendorName)} h={4} />
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
