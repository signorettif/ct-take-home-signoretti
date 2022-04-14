const vendorsAndCarsList = require("../fixtures/cars.json")[0][
  "VehAvailRSCore"
]["VehVendorAvails"];

export const getVendorsAndCarsList = () =>
  vendorsAndCarsList as SearchResults["VehVendorAvails"];
