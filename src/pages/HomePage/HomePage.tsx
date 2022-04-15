import React from 'react';

import { useQuery } from 'react-query';
import { getSearchResults } from 'api/getSearchResults';

import { useCarsList } from 'hooks/cars';

import { Box } from '@chakra-ui/react';

import PageLayout from 'components/layout/PageLayout';
import ContentContainer from 'components/layout/ContentContainer';
import CarsList from 'components/car/CarsList';
import LoadingBox from 'components/ui/loadingBox';

import SearchDetails from './components/SearchDetails';
import SortCars from './components/SortCars';
import Sidebar from './components/Sidebar';

const HomePage: React.FC = () => {
  // This is just to show how I would go about actually fetching the data, clearly a bit overkill here
  const { data, isLoading } = useQuery<SearchResults, Error>(
    'search-results',
    getSearchResults
  );

  // Here there is a bit of prop drilling but to an acceptable level IMHO. If we wanted to be more modular we could go with a Context / Provider setup and load cars directly in the components
  const { filteredCarsList, sort, setSort, filter, setCarsFilter } =
    useCarsList();

  return (
    <PageLayout>
      {!isLoading && data && filteredCarsList ? (
        <>
          <ContentContainer marginTop={16}>
            <SearchDetails
              PickUpDateTime={data.VehRentalCore['@PickUpDateTime']}
              ReturnDateTime={data.VehRentalCore['@ReturnDateTime']}
              {...data.VehRentalCore}
            />
          </ContentContainer>

          <ContentContainer marginTop={10}>
            <SortCars sort={sort} setSort={setSort} />
            <Box display="flex" gap={4}>
              <Sidebar setCarsFilter={setCarsFilter} filter={filter} />
              <Box width="100%">
                <CarsList carsList={filteredCarsList} />
              </Box>
            </Box>
          </ContentContainer>
        </>
      ) : (
        <LoadingBox />
      )}
    </PageLayout>
  );
};

export default HomePage;
