import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import { CarsListSortingOptions } from 'constants/cars';
import { getVendorsAndCarsList } from 'api/getVendorsAndCarsList';
import { filterCarsList } from 'utils/filterCarsList';

const normaliseCarsData = (carData: SearchResults['VehVendorAvails']) =>
  carData
    .map((vendorAvailabilities) => {
      const vendorCode = vendorAvailabilities.Vendor['@Code'];
      const vendorName = vendorAvailabilities.Vendor['@Name'];

      return vendorAvailabilities.VehAvails.map((car) => ({
        ...car,
        id: `${vendorCode}-${car.Vehicle['@Code']}`,
        vendorName,
      }));
    })
    .flat();

const sortNormalizedCarData = (
  carData: CarDetailsWithIdAndVendor[],
  sort: CarsListSortingOptions
) => {
  const copyArrayToBeSorted = [...carData];

  if (
    sort === CarsListSortingOptions.PRICE_LOW_TO_HIGH ||
    sort === CarsListSortingOptions.PRICE_HIGH_TO_LOW
  ) {
    copyArrayToBeSorted.sort((a, b) => {
      const diff =
        parseFloat(a.TotalCharge['@RateTotalAmount']) -
        parseFloat(b.TotalCharge['@RateTotalAmount']);

      return sort === CarsListSortingOptions.PRICE_LOW_TO_HIGH ? diff : -diff;
    });
  }

  if (sort === CarsListSortingOptions.DOORS_LOW_TO_HIGH) {
    copyArrayToBeSorted.sort(
      (a, b) =>
        parseInt(a.Vehicle['@DoorCount']) - parseInt(b.Vehicle['@DoorCount'])
    );
  }

  return copyArrayToBeSorted;
};

export const useCarsList = () => {
  // See comments on README
  const { data, isLoading, ...rest } = useQuery(
    'vendors-and-cars-list',
    getVendorsAndCarsList
  );

  const [sort, setSort] = useState(CarsListSortingOptions.PRICE_LOW_TO_HIGH);
  const [filter, setCarsFilter] = useState<CarsFilter>({ vendorsList: [] });
  const [carsList, setCarsList] = useState<CarDetailsWithIdAndVendor[]>([]);
  const [filteredCarsList, setFilteredCarsList] = useState<
    CarDetailsWithIdAndVendor[]
  >([]);

  useEffect(() => {
    if (data) {
      let tempCarData = normaliseCarsData(data);
      tempCarData = sortNormalizedCarData(tempCarData, sort);

      setCarsList(tempCarData);
      setFilteredCarsList(filterCarsList(tempCarData, filter));
    }
  }, [data, sort, filter]);

  return {
    carsList,
    filteredCarsList,

    sort,
    setSort,

    filter,
    setCarsFilter,

    isLoading,
    ...rest,
  };
};

export const useCar = (id: string) => {
  const { carsList } = useCarsList();

  return carsList.find((car) => car.id === id);
};
