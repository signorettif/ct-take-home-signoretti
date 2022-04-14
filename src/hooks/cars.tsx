import { useState } from "react";
import { useQuery } from "react-query";

import { getVendorsAndCarsList } from "shared/api/getVendorsAndCarsList";
import { CarsListSortingOptions } from "constants/cars";

export const useCarsList = () => {
  const { data, isLoading, ...rest } = useQuery(
    "vendors-and-cars-list",
    getVendorsAndCarsList
  );

  const [sort, setSort] = useState(CarsListSortingOptions.PRICE_LOW_TO_HIGH);
  const [filter, setCarsFilter] = useState<CarsFilter>({});

  // This should technically be undefined to manage isLoading properly – quick life hack for this assessment
  let carsList = [] as CarDetailsWithId[];

  if (!isLoading && data) {
    carsList = data
      ?.map((vendorAvailabilities) => {
        const vendorCode = vendorAvailabilities.Vendor["@Code"];

        return vendorAvailabilities.VehAvails.map((car) => ({
          ...car,
          id: `${vendorCode}-${car.Vehicle["@Code"]}`,
        }));
      })
      .flat();

    if (
      sort === CarsListSortingOptions.PRICE_LOW_TO_HIGH ||
      sort === CarsListSortingOptions.PRICE_HIGH_TO_LOW
    ) {
      carsList.sort((a, b) => {
        const diff =
          parseFloat(a.TotalCharge["@RateTotalAmount"]) -
          parseFloat(b.TotalCharge["@RateTotalAmount"]);

        return sort === CarsListSortingOptions.PRICE_LOW_TO_HIGH ? diff : -diff;
      });
    }

    if (sort === CarsListSortingOptions.DOORS_LOW_TO_HIGH) {
      carsList.sort(
        (a, b) =>
          parseInt(a.Vehicle["@DoorCount"]) - parseInt(b.Vehicle["@DoorCount"])
      );
    }
  }

  let filteredCarsList = carsList;

  if (filter.minPrice) {
    filteredCarsList = filteredCarsList.filter(
      (car) =>
        parseFloat(car.TotalCharge["@RateTotalAmount"]) > filter.minPrice!
    );
  }

  if (filter.maxPrice) {
    filteredCarsList = filteredCarsList.filter(
      (car) =>
        parseFloat(car.TotalCharge["@RateTotalAmount"]) < filter.maxPrice!
    );
  }

  return {
    carsList,
    filteredCarsList,
    sort,
    setSort,
    isLoading,
    setCarsFilter,
    ...rest,
  };
};

export const useCar = (id: string) => {
  const { carsList } = useCarsList();

  return carsList.find((car) => car.id === id);
};
