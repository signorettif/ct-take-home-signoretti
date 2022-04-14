import { useState } from 'react';

import { useQuery } from 'react-query';

import { getVendorsAndCarsList } from '../api/getVendorsAndCarsList';
import { filterCarsList } from '../utils/filterCarsList';

export const enum carsListSortingOptions {
  PRICE_LOW_TO_HIGH = 'price_low_to_high',
  PRICE_HIGH_TO_LOW = 'price_high_to_low',
  DOORS_LOW_TO_HIGH = 'doors_low_to_high',
}

const useCarsList = () => {
  const { data, isLoading, ...rest } = useQuery(
    'vendors-and-cars-list',
    getVendorsAndCarsList
  );

  const [sort, setSort] = useState(carsListSortingOptions.PRICE_LOW_TO_HIGH);
  const [filter, setCarsFilter] = useState<CarsFilter>({ vendorsList: [] });

  // This should technically be undefined to manage isLoading properly – quick life hack for this assessment
  let carsList = [] as CarDetailsWithIdAndVendor[];

  if (!isLoading && data) {
    carsList = data
      ?.map((vendorAvailabilities) => {
        const vendorCode = vendorAvailabilities.Vendor['@Code'];
        const vendorName = vendorAvailabilities.Vendor['@Name'];

        return vendorAvailabilities.VehAvails.map((car) => ({
          ...car,
          id: `${vendorCode}-${car.Vehicle['@Code']}`,
          vendorName,
        }));
      })
      .flat();

    if (
      sort === carsListSortingOptions.PRICE_LOW_TO_HIGH ||
      sort === carsListSortingOptions.PRICE_HIGH_TO_LOW
    ) {
      carsList.sort((a, b) => {
        const diff =
          parseFloat(a.TotalCharge['@RateTotalAmount']) -
          parseFloat(b.TotalCharge['@RateTotalAmount']);

        return sort === carsListSortingOptions.PRICE_LOW_TO_HIGH ? diff : -diff;
      });
    }

    if (sort === carsListSortingOptions.DOORS_LOW_TO_HIGH) {
      carsList.sort(
        (a, b) =>
          parseInt(a.Vehicle['@DoorCount']) - parseInt(b.Vehicle['@DoorCount'])
      );
    }
  }

  let filteredCarsList = filterCarsList(carsList, filter);

  return {
    carsList,
    filteredCarsList,
    sort,
    setSort,
    isLoading,
    setCarsFilter,
    filter,
    ...rest,
  };
};

export default useCarsList;
