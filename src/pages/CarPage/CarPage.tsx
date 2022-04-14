import React from "react";
import { useParams } from "react-router-dom";

import { Box, Text } from "@chakra-ui/react";

import CarCard from "components/car/CarCard";
import ContentContainer from "components/layout/ContentContainer";
import PageLayout from "components/layout/PageLayout";

import { useCar } from "hooks/cars";

const CarPage = () => {
  const { carId } = useParams();

  const foundCar = useCar(carId!);

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
