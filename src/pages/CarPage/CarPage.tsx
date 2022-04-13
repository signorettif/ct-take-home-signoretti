import { Box, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarCard from '../../components/car/CarCard';
import ContentContainer from '../../components/layout/ContentContainer';

import PageLayout from '../../components/layout/PageLayout';
import useCar from '../../hooks/useCar';

interface CarPageProps {}

const CarPage: React.FC<CarPageProps> = () => {
  const { carId } = useParams();

  const foundCar = useCar(carId as string);

  return (
    <PageLayout>
      <ContentContainer marginTop={16}>
        <Box>
          {foundCar ? (
            <CarCard car={foundCar} hiddenDetailsButton />
          ) : (
            <Text>We could not find what you're looking for</Text>
          )}
        </Box>
      </ContentContainer>
    </PageLayout>
  );
};

export default CarPage;
