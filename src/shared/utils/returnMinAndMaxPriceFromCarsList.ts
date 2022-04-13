export const returnMinAndMaxPriceFromCarsList = (
  carsList: CarDetailsWithId[]
) => {
  const max = carsList.reduce((acc, car) => {
    const carPrice = parseFloat(car.TotalCharge['@RateTotalAmount']);

    if (carPrice > acc) return carPrice;

    return acc;
  }, -Infinity);

  const min = carsList.reduce((acc, car) => {
    const carPrice = parseFloat(car.TotalCharge['@RateTotalAmount']);

    if (carPrice < acc) return carPrice;

    return acc;
  }, +Infinity);

  return [Math.floor(min), Math.ceil(max)];
};
