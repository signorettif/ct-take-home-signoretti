export const filterCarsList = (
  carsList: CarDetailsWithIdAndVendor[],
  filter: CarsFilter
) => {
  let filteredCarsList = carsList;

  if (filter.minPrice) {
    filteredCarsList = filteredCarsList.filter(
      (car) =>
        parseFloat(car.TotalCharge['@RateTotalAmount']) > filter.minPrice!
    );
  }

  if (filter.maxPrice) {
    filteredCarsList = filteredCarsList.filter(
      (car) =>
        parseFloat(car.TotalCharge['@RateTotalAmount']) < filter.maxPrice!
    );
  }

  if (filter.vendorsList.length > 0) {
    filteredCarsList = filteredCarsList.filter((car) =>
      filter.vendorsList.includes(car.vendorName)
    );
  }

  return filteredCarsList;
};
