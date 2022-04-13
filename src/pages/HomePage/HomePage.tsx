import React from 'react';

import { useQuery } from 'react-query';
import { getSearchResults } from '../../shared/api/getSearchResults';

import { Box } from '@chakra-ui/react';

import ContentContainer from '../../components/layout/ContentContainer';
import SearchDetails from './components/SearchDetails';
import SortCars from './components/SortCars';
import Sidebar from './components/Sidebar';
import PageLayout from '../../components/layout/PageLayout';
import CarsList from '../../components/car/CarsList';
import LoadingBox from '../../components/ui/loadingBox';
import useCarsList from '../../hooks/useCarsList';

const HomePage: React.FC = () => {
  // This is just to show how I would go about actually fetching the data, clearly a bit overkill here
  const { data, isLoading } = useQuery<SearchResults, Error>(
    'search-results',
    getSearchResults
  );

  const { filteredCarsList, sort, setSort, setCarsFilter } = useCarsList();

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
              <Sidebar setCarsFilter={setCarsFilter} />
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
