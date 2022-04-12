import React from 'react';
import { Box } from '@chakra-ui/react';

import Header from '../../components/layout/Header';
import ContentContainer from '../../components/layout/ContentContainer';
import SearchDetails from './components/SearchDetails';

const cars = require('../../constants/cars.json')[0]['VehAvailRSCore'];

const HomePage: React.FC = () => {
  // //TODO@ load cars from endpoint using react query
  console.log(cars);

  const querySearchDetails = cars['VehRentalCore'];

  return (
    <Box w="100%">
      <Header />
      <ContentContainer marginTop={16}>
        <SearchDetails
          PickUpDateTime={querySearchDetails['@PickUpDateTime']}
          ReturnDateTime={querySearchDetails['@ReturnDateTime']}
          {...querySearchDetails}
        />
      </ContentContainer>
    </Box>
  );
};

export default HomePage;
