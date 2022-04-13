const vendorsAndCarsList = require('../../constants/cars.json')[0][
  'VehAvailRSCore'
]['VehVendorAvails'];

export const getVendorsAndCarsList = () =>
  vendorsAndCarsList as SearchResults['VehVendorAvails'];
