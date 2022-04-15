const vendorsAndCarsList = require('../fixtures/cars.json')[0][
  'VehAvailRSCore'
]['VehVendorAvails'];

// See comments on README
export const getVendorsAndCarsList = () =>
  vendorsAndCarsList as SearchResults['VehVendorAvails'];
