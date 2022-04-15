import React from 'react';

import { GridItem, Text } from '@chakra-ui/react';

interface CarSpecWithIconProps {
  spec: string;
  icon: React.ReactNode;
}

const CarSpecWithIcon: React.FC<CarSpecWithIconProps> = ({ spec, icon }) => (
  <GridItem display="flex" alignItems="center">
    {icon}
    <Text marginLeft={2}>{spec}</Text>
  </GridItem>
);

export default CarSpecWithIcon;
