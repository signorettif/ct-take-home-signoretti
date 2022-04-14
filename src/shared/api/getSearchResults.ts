const searchResults = require("../../fixtures/cars.json")[0]["VehAvailRSCore"];

export const getSearchResults = () => searchResults as SearchResults;