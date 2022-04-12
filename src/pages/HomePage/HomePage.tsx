import React from 'react';
import { Box } from '@chakra-ui/react';

import Header from '../../components/layout/Header';
import ContentContainer from '../../components/layout/ContentContainer';
import SearchDetails from './components/SearchDetails';

const HomePage: React.FC = () => {
  // //TODO@ load cars from endpoint using react query
  // const cars = require('../constants/cars.json');
  // console.log(cars);

  return (
    <Box w="100%">
      <Header />
      <ContentContainer marginTop={16}>
        <SearchDetails />
      </ContentContainer>
    </Box>
  );
};

export default HomePage;
