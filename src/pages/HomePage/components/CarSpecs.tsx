import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

interface CarSpecsProps {
  carSpecs: CarDetails['Vehicle'];
}

//TODO@ add icons

const CarSpecs: React.FC<CarSpecsProps> = ({ carSpecs }) => {
  return (
    <Grid w="100%" gridTemplateColumns={'auto auto'} gap={2}>
      <GridItem>{carSpecs['@AirConditionInd']}</GridItem>
      <GridItem>{carSpecs['@BaggageQuantity']}</GridItem>
      <GridItem>{carSpecs['@DoorCount']}</GridItem>
      <GridItem>{carSpecs['@DriveType']}</GridItem>
      <GridItem>{carSpecs['@FuelType']}</GridItem>
      <GridItem>{carSpecs['@PassengerQuantity']}</GridItem>
      <GridItem>{carSpecs['@TransmissionType']}</GridItem>
    </Grid>
  );
};

export default CarSpecs;
