import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarCard from '../../components/car/CarCard';
import ContentContainer from '../../components/layout/ContentContainer';

import PageLayout from '../../components/layout/PageLayout';

interface CarPageProps {}

//Todo@ why does it render twice
//Todo@ better typing

const getCarByVendorIdAndCarCode = (vendorId: string, carCode: string) => {
  const vendorAvailabilities = require('../../constants/cars.json')[0][
    'VehAvailRSCore'
  ]['VehVendorAvails'];

  const foundVendor = vendorAvailabilities.find(
    (vendor: { [x: string]: { [x: string]: any } }) =>
      vendor['Vendor']['@Code'] === vendorId
  );

  const vendorCars = foundVendor['VehAvails'];

  const foundCar = vendorCars.find(
    (car: { [x: string]: { [x: string]: string } }) =>
      car['Vehicle']['@Code'] === carCode
  );

  return foundCar;
};

const CarPage: React.FC<CarPageProps> = () => {
  const { vendorId, carCode } = useParams();

  const car = getCarByVendorIdAndCarCode(vendorId as string, carCode as string);

  return (
    <PageLayout>
      <ContentContainer marginTop={16}>
        <Box>
          <CarCard
            car={car}
            vendorCode={vendorId as string}
            hiddenDetailsButton
          />
        </Box>
      </ContentContainer>
    </PageLayout>
  );
};

export default CarPage;
