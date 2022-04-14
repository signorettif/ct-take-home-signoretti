import React from 'react';

import { CalendarIcon } from '@chakra-ui/icons';
import { Grid, GridItem } from '@chakra-ui/react';

import TransmissionIcon from '../icons/TransmissionIcon';
import CarSpecWithIcon from './CarSpecWithIcon';
import AirIcon from '../icons/AirIcon';
import LuggageIcon from '../icons/LuggageIcon';
import SeatsIcon from '../icons/SeatsIcon';
import FuelIcon from '../icons/FuelIcon';
import DoorIcon from '../icons/DoorIcon';

interface CarSpecsProps {
  carSpecs: CarDetails['Vehicle'];
}

const CarSpecs: React.FC<CarSpecsProps> = ({ carSpecs }) => {
  return (
    <Grid w="100%" gridTemplateColumns={'auto auto'} gap={2} fontSize="sm">
      {carSpecs['@AirConditionInd'] === 'true' && (
        <CarSpecWithIcon spec="Air Conditioning" icon={<AirIcon />} />
      )}

      <CarSpecWithIcon
        spec={carSpecs['@BaggageQuantity']}
        icon={<LuggageIcon />}
      />

      <CarSpecWithIcon
        spec={`${carSpecs['@DoorCount']} Seats`}
        icon={<DoorIcon />}
      />

      {carSpecs['@DriveType'] !== 'Unspecified' && (
        <GridItem display="flex" alignItems="center">
          <CalendarIcon />
          {carSpecs['@DriveType']}
        </GridItem>
      )}

      <CarSpecWithIcon spec={carSpecs['@FuelType']} icon={<FuelIcon />} />

      <CarSpecWithIcon
        spec={`${carSpecs['@PassengerQuantity']} Seats`}
        icon={<SeatsIcon />}
      />

      <CarSpecWithIcon
        spec={carSpecs['@TransmissionType']}
        icon={<TransmissionIcon />}
      />
    </Grid>
  );
};

export default CarSpecs;
