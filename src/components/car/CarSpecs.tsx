import { CalendarIcon } from '@chakra-ui/icons';
import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

interface CarSpecsProps {
  carSpecs: CarDetails['Vehicle'];
}

const CarSpecs: React.FC<CarSpecsProps> = ({ carSpecs }) => {
  return (
    <Grid w="100%" gridTemplateColumns={'auto auto'} gap={2} fontSize="sm">
      {carSpecs['@AirConditionInd'] === 'true' && (
        <GridItem display="flex" alignItems="center">
          <CalendarIcon />
        </GridItem>
      )}
      <GridItem display="flex" alignItems="center">
        <CalendarIcon />
        {carSpecs['@BaggageQuantity']}
      </GridItem>
      <GridItem display="flex" alignItems="center">
        <CalendarIcon />
        {carSpecs['@DoorCount']} Doors
      </GridItem>
      {carSpecs['@DriveType'] !== 'Unspecified' && (
        <GridItem display="flex" alignItems="center">
          <CalendarIcon />
          {carSpecs['@DriveType']}
        </GridItem>
      )}
      <GridItem display="flex" alignItems="center">
        <CalendarIcon />
        {carSpecs['@FuelType']}
      </GridItem>
      <GridItem display="flex" alignItems="center">
        <CalendarIcon />
        {carSpecs['@PassengerQuantity']} Seats
      </GridItem>
      <GridItem display="flex" alignItems="center">
        <CalendarIcon />
        {carSpecs['@TransmissionType']}
      </GridItem>
    </Grid>
  );
};

export default CarSpecs;
