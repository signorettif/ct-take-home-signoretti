import React from 'react';
import { Box } from '@chakra-ui/react';

import ContentContainer from '../../components/layout/ContentContainer';
import SearchDetails from './components/SearchDetails';
import SortCars from './components/SortCars';
import Sidebar from './components/Sidebar';
import PageLayout from '../../components/layout/PageLayout';
import CarsList from '../../components/car/CarsList';

const cars = require('../../constants/cars.json')[0]['VehAvailRSCore'];

const HomePage: React.FC = () => {
  const querySearchDetails = cars['VehRentalCore'];

  return (
    <PageLayout>
      <ContentContainer marginTop={16}>
        <SearchDetails
          PickUpDateTime={querySearchDetails['@PickUpDateTime']}
          ReturnDateTime={querySearchDetails['@ReturnDateTime']}
          {...querySearchDetails}
        />
      </ContentContainer>

      <ContentContainer marginTop={10}>
        <SortCars />
        <Box display="flex" gap={4}>
          <Sidebar />
          <Box width="100%">
            <CarsList />
          </Box>
        </Box>
      </ContentContainer>
    </PageLayout>
  );
};

export default HomePage;
